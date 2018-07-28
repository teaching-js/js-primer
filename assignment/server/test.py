from flask import Flask, render_template, request, redirect
from flask_cors import CORS
import json
import sqlite3

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

def error(msg):
    return jsonResponse({
        "error": True,
        "error_msg":msg
        })

def result(j):
    j["error"] = False
    j["error_msg"] = None
    return jsonResponse(j)

# data base interactions

def get_user(usr, password):
    db_conn = sqlite3.connect("test.db")
    c = db_conn.cursor()
    injects = (usr,password)
    c.execute("SELECT USERNAME FROM USERS WHERE USERNAME=? AND PASSWORD=?",injects)
    data = c.fetchone()
    if data == None:
        return None
    tkn = generate_token()
    injects = (tkn,username)
    c.execute("UPDATE USERS SET TOKEN=? WHERE USERNAME=?",injects)
    db_conn.close()
    return {
        "username": data[0],
        "token": tkn
    }


# endpoints

@app.route("/api/login", methods=['POST'])
def index():
    data = request.get_json()
    usr = data.get("username",None)
    password = data.get("password",None)
    user = get_user(usr,password)
    if not user:
        return error("Unknown Username/Password")
    return result(user)

if __name__ == "__main__":
    app.run(debug=True)
