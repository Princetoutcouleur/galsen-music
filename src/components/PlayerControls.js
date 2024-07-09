import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import '../Player.css'

const spotifyApi = new SpotifyWebApi();

function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const playbackState = await spotifyApi.getMyCurrentPlaybackState();
      setIsPlaying(playbackState.is_playing);
      setCurrentTrack(playbackState.item);
    };

    fetchData();
  }, []);

  const handlePlay = () => {
    spotifyApi.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    spotifyApi.pause();
    setIsPlaying(false);
  };

  return (
    <div className="player-controls">
      {currentTrack && (
        <div className="track-info">
          <img src={currentTrack.album.images[0].url} alt={currentTrack.album.name} className="album-cover" />
          <div className="track-details">
            <h3>{currentTrack.name}</h3>
            <p>{currentTrack.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        </div>
      )}
      <div className="control-buttons">
        {isPlaying ? (
          <button className="btn btn-danger" onClick={handlePause}>Pause</button>
        ) : (
          <button className="btn btn-success" onClick={handlePlay}>Play</button>
        )}
      </div>
    </div>
  );
}

export default PlayerControls;
