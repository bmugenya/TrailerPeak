from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from app.config import configurations
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()

def register_extensions(app):
    db.init_app(app)
    migrate.init_app(app,db)
    cors.init_app(app)
    

def register_blueprints(app):
    from app.home.routes import blueprint
    app.register_blueprint(blueprint)


def configure_database(app):
    @app.before_first_request
    def initialize_database():
        try:
            db.create_all()
        except Exception as e:

            print('> Error: DBMS Exception: ' + str(e) )


    @app.teardown_request
    def shutdown_session(exception=None):
        db.session.remove() 

def create_app(configuration):
    app = Flask(__name__)
    app.config.from_object(configurations[configuration])

    from app.home import models
    register_extensions(app)
    register_blueprints(app)
    configure_database(app)

    return app
