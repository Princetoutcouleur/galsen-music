import React from 'react';

const TrackList = ({ tracks }) => {
  return (
    <div className="track-list">
      {tracks.map(track => (
        <div key={track.id} className="track-card">
          <img src={track.album.images[0].url} alt={track.name} />
          <div>
            <h3>{track.name}</h3>
            <p>{track.artists[0].name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
