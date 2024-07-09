import React, { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handlePlay = () => {
    spotifyApi.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    spotifyApi.pause();
    setIsPlaying(false);
  };

  return (
    <div className='bg-secondary p-4 fixed-bottom'>
      {currentTrack && (
        <div className="text-white mb-3">
          <img src={currentTrack.album.images[0].url} alt={currentTrack.album.name} className="img-fluid" />
          <h3>{currentTrack.name}</h3>
          <p>{currentTrack.artists.map((artist) => artist.name).join(', ')}</p>
        </div>
      )}
      {isPlaying ? (
        <button className="btn btn-danger me-3" onClick={handlePause}>Pause</button>
      ) : (
        <button className="btn btn-success me-3" onClick={handlePlay}>Play</button>
      )}
    </div>
  );
}

export default PlayerControls;
