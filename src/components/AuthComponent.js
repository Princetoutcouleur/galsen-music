import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import '../Auth.css'

const spotifyApi = new SpotifyWebApi();

function AuthComponent({ setToken }) {
  const clientId = '99e8668f256c40c7a42bb3c2219707d9';
  const redirectUri = 'http://localhost:3000';
  const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private'];

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        if (item) {
          let parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    window.location.hash = '';

    if (hash.access_token) {
      setToken(hash.access_token);
    }
  }, [setToken]);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;
  };

  return (
    <div className="auth-container">
    <h2>Connexion à Spotify</h2>
    <p>Pour accéder aux fonctionnalités, veuillez vous connecter avec votre compte Spotify.</p>
    <button className="btn btn-primary" onClick={handleLogin}>Se Connecter avec Spotify</button>
  </div>
  );
}

export default AuthComponent;
