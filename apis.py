#Author = Shivam Dubey (Revo-Inc)
#This is the file to understand Python String and what can be done with it various functions their interaction will try to incorporete various interview questions here
from flask import Flask,jsonify,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/hello')
def helloo():
    data = {'example': 'print("Hello")'}
    return jsonify(data)

@app.route('/api/assign_variable', methods=['POST'])
def assign_variable():
    data = request.json
    input_data = data.get('input')
    response = {'example': f'a = "{input_data}"'}
    return jsonify(response)

@app.route('/api/multiLine_str')
def multiLine_str():
    data = {'example': 'print("""Multi Line Text Here""")'}
    return jsonify(data)

@app.route('/api/strArrays', methods=['POST'])
def strArrays():
    data = request.json
    input_data = data.get('input')
    response = {'example': f'a = "{input_data[1]}"'}
    return jsonify(response)


@app.route('/api/loop_str', methods=['POST'])
def loop_str():
    data = request.json
    input_data = data.get('input')
    
    response = {'actual':'for x in f"{input_data}: print(x)"','example': f"print('{{{', '.join([str(x) for x in input_data])}}}')"}
    return jsonify(response)

@app.route('/api/str_length', methods = ['POST'])
def str_length():
    data = request.json
    input_data = data.get("input")
    response = {'example':f'{len(input_data)}','actual':f'len({input_data})'}
    return jsonify(response)

@app.route('/api/check_str')
def check_str():
    data = {'example': ' print("free" in txt)'}
    return jsonify(data)

@app.route('/api/check_str_not')
def check_str_not():
    data = {'example': ' print("expensive" not in txt)'}
    return jsonify(data)

if __name__ == '__main__':
    app.run()
