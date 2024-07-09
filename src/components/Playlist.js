import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "../Playlist.css";

const spotifyApi = new SpotifyWebApi();

function Playlist({ token, searchResults }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (token && searchResults.length === 0) {
      spotifyApi.setAccessToken(token);
      fetchPlaylists();
    }
  }, [token, searchResults]);

  const fetchPlaylists = () => {
    spotifyApi.getUserPlaylists().then(
      (response) => {
        setPlaylists(response.items);
      },
      (error) => {
        console.error("Erreur lors de la récupération des playlists : ", error);
      }
    );
  };

  const handlePlay = (uri) => {
    spotifyApi.play({ uris: [uri] });
  };

  return (
    <div className="container-fluid mb-5">
      <h2 className="mb-3">
        {searchResults.length > 0
          ? "Résultats de recherche"
          : "Vos Playlists Spotify"}
      </h2>
      {searchResults.length > 0 ? (
        <ul className="list-group">
          {searchResults.map((track) => (
            <li
              key={track.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <img
                  className="search-result-img"
                  src={
                    track.album.images.length > 0
                      ? track.album.images[0].url
                      : ""
                  }
                  alt={track.name}
                />
                <span className="ms-3">
                  {track.name} -{" "}
                  {track.artists.map((artist) => artist.name).join(", ")}
                </span>
              </div>
              <button
                className="btn btn-play"
                onClick={() => handlePlay(track.uri)}
              >
                ▶
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="row d-flex justify-content-center align-items-center">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <div className="card playlist-card">
                <div className="card-img-container">
                  <img
                    className="card-img-top img-fluid"
                    src={
                      playlist.images.length > 0 ? playlist.images[0].url : ""
                    }
                    alt={playlist.name}
                  />
                  <button
                    className="btn btn-play"
                    onClick={() => handlePlay(playlist.uri)}
                  >
                    ▶
                  </button>
                </div>
                <div className="card-body">
                  <p className="card-title fs-6 fw-bold">{playlist.name}</p>
                  {playlist.description && (
                    <p className="card-text">
                      {playlist.description.length > 100
                        ? `${playlist.description.substring(0, 100)}...`
                        : playlist.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlist;
