import React, { useState } from 'react';

const Player = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-dark text-white fixed-bottom w-100 p-4 d-flex justify-content-between align-items-center">
      {track && (
        <div className="d-flex align-items-center">
          <img
            src={track.album.images[0].url}
            alt={track.name}
            className="rounded-circle"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
          <div className="ml-3">
            <h5 className="mb-0">{track.name}</h5>
            <p className="mb-0">{track.artists[0].name}</p>
          </div>
        </div>
      )}
      <button className="btn btn-primary" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
