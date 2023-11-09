from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/buscar",methods=["GET"])
def buscar():
    return render_template('buscar.html')

@app.route("/insetar",methods=["POST"])
def insetar():
    '''Pagina para probar DOM'''
    return render_template('insetar.html')