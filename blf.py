from flask import Flask, render_template, send_from_directory, request, send_file, jsonify, g
from flask_babel import Babel
import os
import json
from datetime import datetime
from PyPDF2 import PdfFileReader, PdfFileWriter
import zipfile
from tool_app.daily_report import main_daily
from tool_app.weekly_report import main_weekly
from tool_app.monthly_report import main_monthly
from tool_app.product_analysis import main_product_analysis
from tool_app.mic_pdf import main_mic_pdf

app = Flask(__name__, static_folder='./statics', template_folder='./templates')
babel = Babel(app)

app.register_blueprint(main_daily, url_prefix='/tools/daily-report')
app.register_blueprint(main_weekly, url_prefix='/tools/weekly-report')
app.register_blueprint(main_monthly, url_prefix='/tools/monthly-report')
app.register_blueprint(main_product_analysis, url_prefix='/tools/product-analysis')
app.register_blueprint(main_mic_pdf, url_prefix='/tools/mic-pdf')

NEWS_DIR = os.path.join(os.path.dirname(__file__), 'news')

def get_locale():
    # 尝试从请求参数中获取语言设置
    lang = request.args.get('lang')
    if lang in ['zh', 'en']:
        return lang
    # 如果没有指定语言，返回默认语言
    return 'zh'

babel.init_app(app, locale_selector=get_locale)

def load_news():
    news_list = []
    for filename in os.listdir(NEWS_DIR):
        if filename.endswith('.json'):
            with open(os.path.join(NEWS_DIR, filename), 'r', encoding='utf-8') as f:
                news = json.load(f)
                news['id'] = filename[:-5]
                news_list.append(news)
    return sorted(news_list, key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)

@app.route('/locales/<lang>/translation.json')
def serve_translations(lang):
    # 确保路径正确，这里假设翻译文件在 static/locales 目录下
    return send_from_directory('statics/locales', f'{lang}/translation.json')

@app.route('/')
@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/services.html')
def services():
    return render_template('services.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

@app.route('/news.html')
def news():
    news_list = load_news()
    return render_template('news.html', news_list=news_list)

@app.route('/news/<news_id>')
def news_detail(news_id):
    with open(os.path.join(NEWS_DIR, f'{news_id}.json'), 'r', encoding='utf-8') as f:
        news = json.load(f)
    return render_template('news_detail.html', news=news)

@app.route('/tools.html')
def tools():
    return render_template('tools.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

@app.route('/tools/exchange-rate')
def exchange_rate():
    return render_template('toolset/exchange_rate.html')

@app.route('/tools/size-converter')
def size_converter():
    return render_template('toolset/size_converter.html')

@app.route('/tools/mic-pdf')
def mic_pdf():
    return render_template('toolset/mic_pdf.html')

@app.route('/tools/daily-report')
def daily_report():
    return render_template('dataset/daily_report.html')

@app.route('/tools/weekly-report')
def weekly_report():
    return render_template('dataset/weekly_report.html')

@app.route('/tools/monthly-report')
def monthly_report():
    return render_template('dataset/monthly_report.html')

@app.route('/tools/product-analysis')
def product_analysis():
    return render_template('dataset/product_analysis.html')

@app.route('/tools/project-analysis')
def project_analysis():
    return render_template('dataset/project_analysis.html')

# 新增的路由和功能
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8800, debug=True)
