from flask import Blueprint, render_template, send_from_directory, request
from tool_app.news import load_news

main = Blueprint('main', __name__)

def get_locale():
    # Try to get language setting from request parameters
    lang = request.args.get('lang')
    if lang in ['zh', 'en']:
        return lang
    # If no language specified, return default
    return 'zh'

@main.route('/locales/<lang>/translation.json')
def serve_translations(lang):
    return send_from_directory('statics/locales', f'{lang}/translation.json')

@main.route('/')
@main.route('/index.html')
def home():
    return render_template('index.html')

@main.route('/services.html')
def services():
    return render_template('services.html')

@main.route('/about.html')
def about():
    return render_template('about.html')

@main.route('/contact.html')
def contact():
    return render_template('contact.html')

@main.route('/news.html')
def news():
    news_list = load_news()
    return render_template('news.html', news_list=news_list)

@main.route('/tools.html')
def tools():
    return render_template('tools.html')

@main.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@main.route('/tools/exchange-rate')
def exchange_rate():
    return render_template('toolset/exchange_rate.html')

@main.route('/tools/mic-pdf')
def mic_pdf():
    return render_template('toolset/mic_pdf.html')

@main.route('/tools/resize-image')
def resize_image():
    return render_template('toolset/resize_image.html')

@main.route('/tools/daily-report')
def daily_report():
    return render_template('dataset/daily_report.html')

@main.route('/tools/weekly-report')
def weekly_report():
    return render_template('dataset/weekly_report.html')

@main.route('/tools/monthly-report')
def monthly_report():
    return render_template('dataset/monthly_report.html')

@main.route('/tools/product-analysis')
def product_analysis():
    return render_template('dataset/product_analysis.html')

@main.route('/tools/project-analysis')
def project_analysis():
    return render_template('dataset/project_analysis.html')

@main.route('/news/manage')
def manage_news():
    return render_template('news/manage_news.html')

@main.route('/news/create')
def create_news():
    return render_template('news/edit_news.html')

@main.route('/news/edit/<news_id>')
def edit_news(news_id):
    return render_template('/news/edit_news.html', news_id=news_id)

@main.route('/tools/fba-revise-pdf')
def fba_revise_pdf():
    return render_template('toolset/fba_revise_pdf.html')

@main.route('/help/payment_delay')
def payment_delay():
    return render_template('help/payment_report_help.html')

@main.route('/help/payment_report')
def payment_report():
    return render_template('help/payment_report_help.html')

@main.route('/tools/database')
def database():
    return render_template('dataset/database.html')
