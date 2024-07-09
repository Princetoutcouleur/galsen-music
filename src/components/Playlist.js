import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

function Playlist() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    spotifyApi.getUserPlaylists().then((response) => {
      setPlaylists(response.items);
    });
  }, []);

  return (
    <div className="container mb-4">
      <ul className="list-group">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="list-group-item">
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
