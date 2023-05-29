from flask import request, url_for,jsonify,json,current_app
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
 


@blueprint.route('/play/<string:name>', methods=['GET'])
def play(name):
    print(name)
    api_key = current_app.config['YOUTUBE_API_KEY']
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    params = {
        'part': 'snippet',
        'q': name,
        'key': api_key
    }
    
    response = requests.get(search_url, params=params)
    data = response.json()

    # Retrieve the URL of the first video from the search results
    if 'items' in data and len(data['items']) > 0:
        video_id = data['items'][0]['id']['videoId']
        video_url = f'https://www.youtube.com/watch?v={video_id}'
        return jsonify({'video_url': video_url})

    return jsonify({'message': 'Video not found'})