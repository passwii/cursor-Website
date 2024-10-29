from flask import Blueprint, render_template

main_database = Blueprint('main_database', __name__)

@main_database.route('/database')
def database():
    return render_template('dataset/database.html')