from flask import Flask, render_template, send_from_directory, request, send_file, jsonify, g
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
from tool_app.resize_img import main_resize_img
from tool_app.news import main_news, load_news, delete_news_file
from tool_app.fba_revise_pdf import main_fba_revise_pdf

app = Flask(__name__, static_folder='./statics', template_folder='./templates')

app.register_blueprint(main_daily, url_prefix='/tools/daily-report')
app.register_blueprint(main_weekly, url_prefix='/tools/weekly-report')
app.register_blueprint(main_monthly, url_prefix='/tools/monthly-report')
app.register_blueprint(main_product_analysis, url_prefix='/tools/product-analysis')
app.register_blueprint(main_mic_pdf, url_prefix='/tools/mic-pdf')
app.register_blueprint(main_resize_img, url_prefix='/tools/resize-image')
app.register_blueprint(main_news, url_prefix='/news')
app.register_blueprint(main_fba_revise_pdf, url_prefix='/tools/fba-revise-pdf')

def get_locale():
    # 尝试从请求参数中获取语言设置
    lang = request.args.get('lang')
    if lang in ['zh', 'en']:
        return lang
    # 如果没有指定语言，返回默认语言
    return 'zh'


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
    news_list = load_news()  # 使用 load_news 函数
    return render_template('news.html', news_list=news_list)

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

@app.route('/tools/resize-image')
def resize_image():
    return render_template('toolset/resize_image.html')

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

@app.route('/news/manage')
def manage_news():
    return render_template('news/manage_news.html')

@app.route('/news/create')
def create_news():
    return render_template('news/edit_news.html')

@app.route('/news/edit/<news_id>')
def edit_news(news_id):
    return render_template('/news/edit_news.html', news_id=news_id)

@app.route('/tools/fba-revise-pdf')
def fba_revise_pdf():
    return render_template('toolset/fba_revise_pdf.html')


# 新增的路由和功能
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8800, debug=True)
