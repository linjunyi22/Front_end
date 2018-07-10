from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/data')
def data():
	json_data = {
		'data':[
			{
				'id':1,
				'name':'Tom',
				'price':10
			},
			{
				'id':2,
				'name':'jack',
				'price':100
			},
			{
				'id':3,
				'name':'Mary',
				'price':1000
			},
			{
				'id':4,
				'name':'Alan',
				'price':10000
			},
			{
				'id':5,
				'name':'Michael',
				'price':100000
			}
		]
	}

	total = len(json_data['data'])
	return jsonify({
			'total':total,
			'rows':json_data['data']
		})

if __name__ == '__main__':
	app.run(debug=True)



