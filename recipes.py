from flask import Blueprint, jsonify, request
from iqoptionapi.stable_api import IQ_Option
import time
from datetime import  datetime

bp = Blueprint('recipes', __name__, url_prefix='/recipes')



def iq_data():
    I_want_money=IQ_Option("spravesh1818@gmail.com","Secret12345@")
    goal = "YAHOO"
    data=I_want_money.get_candles(goal,10,60,time.time())
    return data

@bp.route("/", methods=["GET", "POST"])
def recipes():
    if request.method == "GET":
        # show all the recipes
        return jsonify(iq_data())
    elif request.method == "POST":
        # save a recipe
        print(request.is_json)
        content = request.get_json()
        print(content)
        return jsonify(content), 201, {'Access-Control-Allow-Origin': '*'}
