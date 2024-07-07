// const API_URL = 'https://api.spotify.com/v1'; // Exemple avec Spotify

// const getAccessToken = () => {
//   // Logique pour obtenir le jeton d'accès
// };

// export const searchTracks = async (query) => {
//   const token = getAccessToken();
//   const response = await fetch(`${API_URL}/search?q=${query}&type=track`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await response.json();
//   return data.tracks.items;
// };


//Client ID : 99e8668f256c40c7a42bb3c2219707d9
//Client secret : 6b1882e55ea2448797aa0705d633e46f

import axios from 'axios';
import queryString from 'query-string';

const CLIENT_ID = '99e8668f256c40c7a42bb3c2219707d9';
const CLIENT_SECRET = '6b1882e55ea2448797aa0705d633e46f';
const REDIRECT_URI = 'http://localhost:3000';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const API_URL = 'https://api.spotify.com/v1';

const scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-library-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-follow-read',
];

export const getAccessToken = async (code) => {
  const response = await axios.post(TOKEN_ENDPOINT, queryString.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
};

export const refreshToken = async (refreshToken) => {
  const response = await axios.post(TOKEN_ENDPOINT, queryString.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
};

export const searchTracks = async (query, token) => {
  const response = await axios.get(`${API_URL}/search`, {
    params: {
      q: query,
      type: 'track',
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.tracks.items;
};
