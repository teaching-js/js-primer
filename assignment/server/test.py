from flask import Flask, render_template, request, redirect, session
from flask_cors import CORS
import json
import sqlite3
from flask.ext.api import status

app = Flask(__name__)
app.config['SECRET_KEY'] = 'f9843yhfiujkhsd837y4'
CORS(app)


# Helpers

def jsonResponse(j):
    response = app.response_class(
        response = json.dumps(j),
        status = 200,
        mimetype = 'application/json'
    )
    return response

# currently logs out any other session when a user
# logs in
def get_usr(usrname,passwd):
    conn = sqlite3.connect("test.sb")
    c = conn.cursor()
    c.execute("SELECT USERNAME FROM USERS WHERE USERNAME=? AND PASSWORD=?",usrname,passwd)
    conn.close()
    return c.fetchone()

# should be secure
def is_logged_in():
    if "username" in session:
        return True
    return False

# endpoints
@app.route("/api/login", methods=['POST'])
def index():
    data = request.get_json()
    usr = data.get("username",None)
    password = data.get("password",None)
    usr = get_usr(usr,password)
    if usr == None:
        return status.HTTP_401_UNAUTHORIZED
    session['username'] = usr
    return status.HTTP_200_OK

if __name__ == "__main__":
    app.run(debug=True)
