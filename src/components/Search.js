import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "../Search.css";

const spotifyApi = new SpotifyWebApi();

function Search({ onSearchResults }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      // Ne rien faire si la requête est vide
      onSearchResults([]);
      return;
    }

    setLoading(true);
    spotifyApi.searchTracks(query).then(
      (response) => {
        setLoading(false);
        onSearchResults(response.tracks.items);
      },
      (error) => {
        setLoading(false);
        console.error("Erreur lors de la recherche de pistes : ", error);
      }
    );
  }, [query, onSearchResults]);

  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          value={query}
          className="form-control me-2"
          placeholder="Trouver un morceau..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {/* {loading && <p>Loading...</p>} */}
    </div>
  );
}

export default Search;
