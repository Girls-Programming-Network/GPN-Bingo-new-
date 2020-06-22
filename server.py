from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__)

@app.route('/bingo')
def bingo():
    return render_template('bingo.html')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
