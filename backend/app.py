from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from datetime import datetime
import os
import json
from werkzeug.utils import secure_filename
from tool_app.daily_report import main_daily
from tool_app.weekly_report import main_weekly
from tool_app.monthly_report import main_monthly
from tool_app.product_analysis import main_product_analysis
from tool_app.mic_pdf import main_mic_pdf
from tool_app.resize_img import main_resize_img
from tool_app.news import main_news, load_news, delete_news_file
from tool_app.fba_revise_pdf import main_fba_revise_pdf
from tool_app.database import main_database

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure upload folder
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Register blueprints
app.register_blueprint(main_daily, url_prefix='/api/tools/daily-report')
app.register_blueprint(main_weekly, url_prefix='/api/tools/weekly-report')
app.register_blueprint(main_monthly, url_prefix='/api/tools/monthly-report')
app.register_blueprint(main_product_analysis, url_prefix='/api/tools/product-analysis')
app.register_blueprint(main_mic_pdf, url_prefix='/api/tools/mic-pdf')
app.register_blueprint(main_resize_img, url_prefix='/api/tools/resize-image')
app.register_blueprint(main_news, url_prefix='/api/news')
app.register_blueprint(main_fba_revise_pdf, url_prefix='/api/tools/fba-revise-pdf')
app.register_blueprint(main_database, url_prefix='/api/tools/database')

# API Routes

@app.route('/api/services', methods=['GET'])
def get_services():
    try:
        with open('data/services.json', 'r', encoding='utf-8') as f:
            services = json.load(f)
        return jsonify(services)
    except FileNotFoundError:
        return jsonify([])

@app.route('/api/services', methods=['POST'])
def create_service():
    service = request.json
    try:
        with open('data/services.json', 'r', encoding='utf-8') as f:
            services = json.load(f)
    except FileNotFoundError:
        services = []
    
    service['id'] = str(len(services) + 1)
    service['createdAt'] = datetime.now().isoformat()
    service['updatedAt'] = datetime.now().isoformat()
    services.append(service)
    
    with open('data/services.json', 'w', encoding='utf-8') as f:
        json.dump(services, f, ensure_ascii=False, indent=2)
    
    return jsonify(service), 201

@app.route('/api/services/<service_id>', methods=['PUT'])
def update_service(service_id):
    service_data = request.json
    try:
        with open('data/services.json', 'r', encoding='utf-8') as f:
            services = json.load(f)
        
        for service in services:
            if service['id'] == service_id:
                service.update(service_data)
                service['updatedAt'] = datetime.now().isoformat()
                break
        
        with open('data/services.json', 'w', encoding='utf-8') as f:
            json.dump(services, f, ensure_ascii=False, indent=2)
        
        return jsonify(service)
    except FileNotFoundError:
        return jsonify({'error': 'Service not found'}), 404

@app.route('/api/services/<service_id>', methods=['DELETE'])
def delete_service(service_id):
    try:
        with open('data/services.json', 'r', encoding='utf-8') as f:
            services = json.load(f)
        
        services = [s for s in services if s['id'] != service_id]
        
        with open('data/services.json', 'w', encoding='utf-8') as f:
            json.dump(services, f, ensure_ascii=False, indent=2)
        
        return '', 204
    except FileNotFoundError:
        return jsonify({'error': 'Service not found'}), 404

@app.route('/api/news', methods=['GET'])
def get_news():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    category = request.args.get('category')
    
    news_list = load_news()
    
    if category:
        news_list = [news for news in news_list if news['category'] == category]
    
    total = len(news_list)
    start = (page - 1) * per_page
    end = start + per_page
    
    return jsonify({
        'items': news_list[start:end],
        'total': total,
        'page': page,
        'per_page': per_page
    })

@app.route('/api/news/<news_id>', methods=['GET'])
def get_news_detail(news_id):
    news_list = load_news()
    news = next((item for item in news_list if item['id'] == news_id), None)
    if news:
        return jsonify(news)
    return jsonify({'error': 'News not found'}), 404

@app.route('/api/news', methods=['POST'])
def create_news():
    news_data = request.json
    news_list = load_news()
    
    news_data['id'] = str(len(news_list) + 1)
    news_data['createdAt'] = datetime.now().isoformat()
    news_data['updatedAt'] = datetime.now().isoformat()
    
    news_list.append(news_data)
    
    with open('data/news.json', 'w', encoding='utf-8') as f:
        json.dump(news_list, f, ensure_ascii=False, indent=2)
    
    return jsonify(news_data), 201

@app.route('/api/news/<news_id>', methods=['PUT'])
def update_news(news_id):
    news_data = request.json
    news_list = load_news()
    
    for news in news_list:
        if news['id'] == news_id:
            news.update(news_data)
            news['updatedAt'] = datetime.now().isoformat()
            break
    
    with open('data/news.json', 'w', encoding='utf-8') as f:
        json.dump(news_list, f, ensure_ascii=False, indent=2)
    
    return jsonify(news)

@app.route('/api/news/<news_id>', methods=['DELETE'])
def delete_news(news_id):
    news_list = load_news()
    news_list = [n for n in news_list if n['id'] != news_id]
    
    with open('data/news.json', 'w', encoding='utf-8') as f:
        json.dump(news_list, f, ensure_ascii=False, indent=2)
    
    return '', 204

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({
            'filename': filename,
            'url': f'/uploads/{filename}'
        })

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    # Ensure data directory exists
    if not os.path.exists('data'):
        os.makedirs('data')
    
    # Create empty JSON files if they don't exist
    for file in ['services.json', 'news.json']:
        file_path = os.path.join('data', file)
        if not os.path.exists(file_path):
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump([], f)
    
    app.run(host='0.0.0.0', port=8800, debug=True)
