from flask import request, url_for,jsonify,json
from app.home import blueprint
from bs4 import BeautifulSoup
import subprocess,sys,requests
from flask_restful import Resource
from app import db
from werkzeug.security import check_password_hash
from app.home.models import *
from app.home.auth import create_auth_token



@blueprint.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data:
        return jsonify({'msg': 'Missing JSON'}), 400

    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'user created successfully'})


@blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'msg': 'Missing JSON'}), 400

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Invalid credentials'}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({'error': 'Invalid email'}), 401

    if not user.verify_password(password):
        return jsonify({'error': 'Invalid password'}), 401

    # User is authenticated, return success response
    token = create_auth_token(user.id)
    return jsonify({'message': 'Login successful', 'user_id': user.id,'token': token}), 200
 


