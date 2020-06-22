from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__)

@app.route('/bingo')
def bingo():
    tasks = []
    with open("tasks.txt") as f:
        for num, line in enumerate(f):
            tasks.append({"num": str(num), "title": line.strip()})
    return render_template('bingo_template.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
