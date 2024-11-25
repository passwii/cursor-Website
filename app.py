from flask import Flask
from tool_app.daily_report import main_daily
from tool_app.weekly_report import main_weekly
from tool_app.monthly_report import main_monthly
from tool_app.product_analysis import main_product_analysis
from tool_app.mic_pdf import main_mic_pdf
from tool_app.resize_img import main_resize_img
from tool_app.news import main_news
from tool_app.fba_revise_pdf import main_fba_revise_pdf
from tool_app.database import main_database
from routes import main

app = Flask(__name__, static_folder='./statics', template_folder='./templates')

app.register_blueprint(main)
app.register_blueprint(main_daily, url_prefix='/tools/daily-report')
app.register_blueprint(main_weekly, url_prefix='/tools/weekly-report')
app.register_blueprint(main_monthly, url_prefix='/tools/monthly-report')
app.register_blueprint(main_product_analysis, url_prefix='/tools/product-analysis')
app.register_blueprint(main_mic_pdf, url_prefix='/tools/mic-pdf')
app.register_blueprint(main_resize_img, url_prefix='/tools/resize-image')
app.register_blueprint(main_news, url_prefix='/news')
app.register_blueprint(main_fba_revise_pdf, url_prefix='/tools/fba-revise-pdf')
app.register_blueprint(main_database, url_prefix='/tools/database')

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8800, debug=True)
