from flask import Flask, render_template, send_from_directory  # 导入Flask、render_template和send_from_directory模块
import os  # 导入os模块
import json
from datetime import datetime

app = Flask(__name__, static_folder='./statics', template_folder='./templates')  # 创建Flask应用实例，指定静态文件夹为'./statics'

NEWS_DIR = os.path.join(os.path.dirname(__file__), 'news')

def load_news():
    news_list = []
    for filename in os.listdir(NEWS_DIR):
        if filename.endswith('.json'):
            with open(os.path.join(NEWS_DIR, filename), 'r', encoding='utf-8') as f:
                news = json.load(f)
                news['id'] = filename[:-5]  # 移除 .json 后缀
                news_list.append(news)
    return sorted(news_list, key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)

@app.route('/')  # 定义根路由
@app.route('/index.html')  # 定义'/index.html'路由
def home():  # 定义home函数
    return render_template('index.html')  # 渲染'index.html'模板

@app.route('/services.html')  # 定义'/services.html'路由
def services():  # 定义services函数
    return render_template('services.html')  # 渲染'services.html'模板

@app.route('/about.html')  # 定义'/about.html'路由
def about():  # 定义about函数
    return render_template('about.html')  # 渲染'about.html'模板

@app.route('/contact.html')  # 定义'/contact.html'路由
def contact():  # 定义contact函数
    return render_template('contact.html')  # 渲染'contact.html'模板

@app.route('/news.html')  # 定义'/news.html'路由
def news():  # 定义news函数
    news_list = load_news()
    return render_template('news.html', news_list=news_list)

@app.route('/news/<news_id>')  # 定义新闻详情路由
def news_detail(news_id):  # 定义news_detail函数
    with open(os.path.join(NEWS_DIR, f'{news_id}.json'), 'r', encoding='utf-8') as f:
        news = json.load(f)
    return render_template('news_detail.html', news=news)

@app.route('/tools.html')  # 定义'/tools.html'路由
def tools():  # 定义tools函数
    return render_template('tools.html')  # 渲染'tools.html'模板

@app.route('/<path:filename>')  # 定义动态路由，匹配任意文件路径
def serve_static(filename):  # 定义serve_static函数
    return send_from_directory(app.static_folder, filename)  # 从静态文件夹中发送指定文件

if __name__ == '__main__':  # 如果是主程序
    app.run(host='0.0.0.0', port=8800, debug=True)  # 运行Flask应用，监听所有网络接口，端口为8800，开启调试模式
