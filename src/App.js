import React, { useState, useEffect } from 'react';
import { getAccessToken, searchTracks } from './services/spotifyAPI';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Player from './components/Player';

const App = () => {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      const urlParams = new URLSearchParams(hash.replace('#', ''));
      token = urlParams.get('access_token');
      window.localStorage.setItem('token', token);
      window.location.hash = '';
    }

    setToken(token);
  }, []);

  const handleSearch = async (query) => {
    const result = await searchTracks(query, token);
    setTracks(result);
  };

  return (
    <div className="">
      <Header />
      {/* <SearchBar onSearch={handleSearch} />
      <TrackList tracks={tracks} />
      <Player /> */}
    </div>
  );
};

export default App;
