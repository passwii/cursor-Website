from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/test')
def test():
    return {'message': 'Backend is working!'}

if __name__ == '__main__':
    app.run(debug=True)
