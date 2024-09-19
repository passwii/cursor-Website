from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='./templates')

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

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8800, debug=True)
