from flask import Flask, render_template, send_from_directory, request, send_file, jsonify
import os
import json
from datetime import datetime
from PyPDF2 import PdfFileReader, PdfFileWriter
import zipfile
from tool_app.daily_report import main_daily
from tool_app.weekly_report import main_weekly
from tool_app.monthly_report import main_monthly
from tool_app.product_analysis import main_product_analysis


app = Flask(__name__, static_folder='./statics', template_folder='./templates')

app.register_blueprint(main_daily, url_prefix='/tools/daily-report')
app.register_blueprint(main_weekly, url_prefix='/tools/weekly-report')
app.register_blueprint(main_monthly, url_prefix='/tools/monthly-report')
app.register_blueprint(main_product_analysis, url_prefix='/tools/product-analysis')

NEWS_DIR = os.path.join(os.path.dirname(__file__), 'news')

def load_news():
    news_list = []
    for filename in os.listdir(NEWS_DIR):
        if filename.endswith('.json'):
            with open(os.path.join(NEWS_DIR, filename), 'r', encoding='utf-8') as f:
                news = json.load(f)
                news['id'] = filename[:-5]
                news_list.append(news)
    return sorted(news_list, key=lambda x: datetime.strptime(x['date'], '%Y-%m-%d'), reverse=True)

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
@app.route('/upload', methods=['POST'])
def upload_files():
    uploaded_files = request.files.getlist("files")
    file2_path = "model_file/21PcsMIC.pdf"
    processed_files = []

    upload_folder = 'pdf/upload'
    os.makedirs(upload_folder, exist_ok=True)
    pdf_folder = 'pdf'
    os.makedirs(pdf_folder, exist_ok=True)

    for uploaded_file in uploaded_files:
        file1_path = os.path.join(upload_folder, uploaded_file.filename)
        uploaded_file.save(file1_path)

        new_pdf = PdfFileReader(open(file2_path, 'rb'))
        existing_pdf = PdfFileReader(open(file1_path, 'rb'))
        output = PdfFileWriter()
        page = existing_pdf.getPage(0)
        page.mergePage(new_pdf.getPage(0))
        output.addPage(page)

        output_filename = f"{os.path.splitext(uploaded_file.filename)[0]}-Merge.pdf"
        output_path = os.path.join(pdf_folder, output_filename)

        with open(output_path, "wb") as outputStream:
            output.write(outputStream)

        processed_files.append(output_path)

    zip_filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}_merged_files.zip"
    zip_path = os.path.join(pdf_folder, zip_filename)

    with zipfile.ZipFile(zip_path, 'w') as zipf:
        for file_path in processed_files:
            zipf.write(file_path, os.path.basename(file_path))

    return send_file(zip_path, as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8800, debug=True)
