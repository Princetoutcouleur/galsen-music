import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import '../Playlist.css'

const spotifyApi = new SpotifyWebApi();

function Playlist({ token }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token); // Définir le token d'accès Spotify
      fetchPlaylists();
    }
  }, [token]);

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

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div id="Playlist" className="container-fluid mb-5">
      <h2 className="mb-3">Vos Playlists Spotify</h2>
      <div className="row d-flex  align-items-center">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="col-lg-2 col-md-4 col-sm-6 mb-3">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={playlist.images.length > 0 ? playlist.images[0].url : ""}
                alt={playlist.name}
              />
              <div className="card-body">
                <p className="card-title fs-6 fw-bold">{playlist.name}</p>
                <p className="card-text">{playlist.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
