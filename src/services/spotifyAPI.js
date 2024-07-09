// CLIENT_ID = '99e8668f256c40c7a42bb3c2219707d9';
// CLIENT_SECRET = '6b1882e55ea2448797aa0705d633e46f'
// REDIRECT_URI = 'http://localhost:3000';

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setClientId('99e8668f256c40c7a42bb3c2219707d9');
spotifyApi.setClientSecret('6b1882e55ea2448797aa0705d633e46f');
spotifyApi.setRedirectURI('http://localhost:3000');

const scopes = ['user-read-private', 'user-read-email'];
const loginURL = spotifyApi.createAuthorizeURL(scopes);