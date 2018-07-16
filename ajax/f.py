from flask import Flask,jsonify,render_template,request

app = Flask(__name__)

@app.route('/getdata',methods=['GET'])
def getdata():
	arg = request.args['hello']
	if arg == 'world':	
		data = {
			'halo':"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			
			'second':'2',
			'third':'3'
		}
	else:
		data = {
			'halo':'good day!'
		}
	return jsonify(data)

@app.route('/test')
def test():
	return render_template('index.html')


if __name__ == '__main__':
	app.run(debug=True)