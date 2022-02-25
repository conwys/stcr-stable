from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os

app = Flask(
 __name__,
 template_folder="./template",
 static_folder="./static",
)

@app.route("/")
def hello_world():
    return render_template('index.html')