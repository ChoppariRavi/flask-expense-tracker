from flask import Flask
from datetime import datetime
from flask import render_template

app = Flask(__name__,
            static_folder = "./client/dist/static",
            template_folder = "./client/dist")

@app.route('/')
def homepage():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)