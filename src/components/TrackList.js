import React from 'react';

const TrackList = ({ tracks }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
      {tracks.map(track => (
        <div key={track.id} className="col">
          <div className="card h-100">
            <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
            <div className="card-body">
              <h5 className="card-title">{track.name}</h5>
              <p className="card-text">{track.artists[0].name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
