from flask import Flask
from flask import (Flask, render_template, request, redirect, session)
import os

app = Flask(
 __name__,
 template_folder="./template",
 static_folder="./static",
)
app.secret_key = 'StudentConstructSecretKey'
info = {"email": "ben@student.com", "password": "ben123"}

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/login")
def renderlogin():
    return render_template('login.html')

@app.route("/register")
def renderregister():
    return render_template('register.html')

@app.route("/editor")
def rendereditor():
    return render_template('editor.html')

@app.route("/index")
def renderindex():
    return render_template('index.html')

def login():
    if(request.method == 'POST'):
        email = request.form.get('email')
        password = request.form.get('password')     
        if email == info['email'] and password == info['password']:
            
            session['info'] = email
            return redirect('/dashboard')

        return render_template('errorpage.html')   

    return render_template("login.html")

@app.route('/dashboard')
def dashboard():
    if('info' in session and session['email'] == info['email']):
        return '<h1>Welcome to the dashboard</h1>'
        return render_template('/dashboard')

    return '<h1>You are not logged in.</h1>'  

@app.route('/logout')
def logout():
    session.pop('info')         
    return redirect('/login')

if __name__ == '__main__':
    app.run(debug=True)