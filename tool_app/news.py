from flask import Blueprint, render_template, send_from_directory, abort, current_app, request, redirect, url_for
import os
import json
from datetime import datetime
import logging

main_news = Blueprint('main_news', __name__)

NEWS_DIR = os.path.join(os.path.dirname(__file__), 'news')

# 设置日志
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def load_news():
    news_list = []
    news_dir = os.path.join(current_app.root_path, 'news')  # 使用 current_app 获取正确的路径
    for filename in os.listdir(news_dir):
        if filename.endswith('.json'):
            try:
                with open(os.path.join(news_dir, filename), 'r', encoding='utf-8') as f:
                    news = json.load(f)
                    news['id'] = filename[:-5]  # 移除 .json 后缀
                    news_list.append(news)
            except Exception as e:
                current_app.logger.error(f"Error loading news file {filename}: {str(e)}")
    return sorted(news_list, key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)

@main_news.route('/')
def news():
    news_list = load_news()
    return render_template('news.html', news_list=news_list)

@main_news.route('/<news_id>')
def news_detail(news_id):
    news_dir = os.path.join(current_app.root_path, 'news')
    file_path = os.path.join(news_dir, f'{news_id}.json')
    
    if not os.path.exists(file_path):
        abort(404)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        news = json.load(f)
    
    return render_template('news/news_detail.html', news=news)

@main_news.route('/manage')
def manage_news():
    news_list = load_news()
    return render_template('news/manage_news.html', news_list=news_list)

@main_news.route('/create', methods=['GET', 'POST'])
def create_news():
    if request.method == 'POST':
        news = {
            'title': request.form['title'],
            'content': request.form['content'],
            'summary': request.form['summary'],
            'category': request.form['category'],
            'date': datetime.now().strftime('%Y-%m-%d')
        }
        save_news(news)
        return redirect(url_for('main_news.manage_news'))
    return render_template('/news/edit_news.html')

@main_news.route('/edit/<news_id>', methods=['GET', 'POST'])
def edit_news(news_id):
    news = load_single_news(news_id)
    if request.method == 'POST':
        news['title'] = request.form['title']
        news['content'] = request.form['content']
        news['summary'] = request.form['summary']
        news['category'] = request.form['category']
        save_news(news, news_id)
        return redirect(url_for('main_news.manage_news'))
    return render_template('/news/edit_news.html', news=news)

@main_news.route('/delete/<news_id>', methods=['POST'])
def delete_news(news_id):
    delete_news_file(news_id)
    return redirect(url_for('main_news.manage_news'))

def save_news(news, news_id=None):
    if news_id is None:
        news_id = datetime.now().strftime('%Y%m%d%H%M%S')
    file_path = os.path.join(current_app.root_path, 'news', f'{news_id}.json')
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(news, f, ensure_ascii=False, indent=4)

def load_single_news(news_id):
    file_path = os.path.join(current_app.root_path, 'news', f'{news_id}.json')
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def delete_news_file(news_id):
    file_path = os.path.join(current_app.root_path, 'news', f'{news_id}.json')
    if os.path.exists(file_path):
        os.remove(file_path)