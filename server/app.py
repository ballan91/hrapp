#!/usr/bin/env python3

import connexion
from flask_cors import CORS

if __name__ == '__main__':
    app = connexion.App(__name__, specification_dir='./swagger/')
    CORS(app.app)
    app.add_api('swagger.yaml', arguments={'title': 'HR Database Application'})
    app.run(port=8080)
