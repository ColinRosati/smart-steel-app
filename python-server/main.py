import flask
from flask_cors import CORS, cross_origin
import pandas as pd


def create_app():
    app = flask.Flask(__name__)
    # cors = CORS(app) 
    CORS(app) #testing CORS on flask
    # app.config['CORS_HEADERS'] = 'Content-Type'

    @app.route('/', methods=['GET', 'POST'])
    def index():
        """
        Index page view handler.
        :return: rendered index.html template
        """
        return flask.render_template('index.html')  

    @app.route('/data', methods=['GET', 'POST'])
    def data():
        """
        Data view handler
        :return: JSON object of the data CSV file
        """
        data = pd.read_csv('task_data.csv')

        context = {
            'sensor_data': data.to_dict(orient='list')
        }
        return flask.jsonify(context)

    return app


if __name__ == "__main__":
    app = create_app()
    # serve the application on port 7410
    app.run(host='127.0.0.1', port=7410)
