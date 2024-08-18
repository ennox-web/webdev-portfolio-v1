from flask import Flask
from mongodb import client


app = Flask(__name__)

@app.route("/api/hello", methods=['GET'])
def hello_world():
    db_names = client.list_database_names()

    return {
        "db_names": db_names
    }


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5328)
