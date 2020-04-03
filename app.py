from flask import Flask
from datetime import datetime
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('hello.html', name=name)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
    