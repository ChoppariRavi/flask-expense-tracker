from flask import Flask
from datetime import datetime
from flask import render_template
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template("hello.html")

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
