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

@app.route('/api/slicing' ,methods = ['POST'])
def slicing():
    data = request.json
    input_data = data.get("input")
    slice = input_data[1:3]
    response = {'example': 'print(b[1:3])','actual':f'sliced string is "{slice}"'}
    return jsonify(response)

@app.route('/api/slice_start' ,methods = ['POST'])
def slice_start():
    data = request.json
    input_data = data.get("input")
    slice = input_data[:3]
    response = {'example': 'print(b[:3])','actual':f'sliced string is "{slice}"'}
    return jsonify(response)

@app.route('/api/slice_end' ,methods = ['POST'])
def slice_end():
    data = request.json
    input_data = data.get("input")
    slice = input_data[2:]
    response = {'example': 'print(b[2:])','actual':f'sliced string is "{slice}"'}
    return jsonify(response)

@app.route('/api/slice_negative' ,methods = ['POST'])
def slice_negative():
    data = request.json
    input_data = data.get("input")
    slice = input_data[-3:-1]
    response = {'example': 'print(b[-3:-1])','actual':f'sliced string is "{slice}"'}
    return jsonify(response)

@app.route('/api/modify_str', methods = ['POST'])
def modify_str():
    data = request.json
    input_data = data.get("input")
    upper = input_data.upper()
    lower = input_data.lower()
    whitespace_remove = input_data.strip()
    replace_str = input_data.replace("a","OOOO")
    response = {'upper': 'print(a.upper())',
                'upper_actual':f' "{upper}"',
                'lower':'print(a.lower())',
                'lower_actual':f'"{lower}"',
                'whitespace':'print(a.strip())',
                'whitespace_actual':f'"{whitespace_remove}"',
                'replace':'print(a.replace("a", "OOOO"))',
                'replace_actual':f'{replace_str}'}
    
    return jsonify(response)

@app.route('/api/split_str', methods = ['POST'])
def split_str():
    data = request.json
    input_data = data.get("input")
    split_data = input_data.split()
    response = {'example': 'print(a.split())',
                'actual':f'splitted string is "{split_data}"'}
    return jsonify(response)

@app.route('/api/str_concat', methods = ['POST'])
def str_concat():
    data = request.json
    input_data = data.get("input")
    input_data_two = data.get("input_two")
    concat = input_data + input_data_two
    print(concat)
    response = {'example': 'c = a + b',
            'actual':f'concatenated string is "{concat}"'}
    return jsonify(response)

@app.route('/api/format_str')
def format_str():
    data = {
        'example': 'print(txt.format(age))',
        'example_two': '''
    quantity = 3
    itemno = 567
    price = 49.95
    myorder = "I want {} pieces of item {} for {} dollars."
    print(myorder.format(quantity, itemno, price))
        '''
    }

    return jsonify(data)

@app.route('/api/escape_char')
def escape_char():
    data = {'Single_Quote':''' txt = 'It\\'s alright.' ''','Single_Quote_actual':''' It's alright. ''',
     'Backslash':''' txt = "This will insert one \\\\ (backslash)." ''',
      'Backlash_actual': ''' This will insert one \ (backslash). ''' ,
        'New_Line':''' txt = "Hello \\n  World!" '''      }
    return jsonify(data)


if __name__ == '__main__':
    app.run()
