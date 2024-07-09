import React, { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import '../Search.css'

const spotifyApi = new SpotifyWebApi();

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    spotifyApi.searchTracks(query).then((response) => {
      setResults(response.tracks.items);
    });
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          className="form-control me-2"
          placeholder="Search for a track..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <ul className="list-group mt-3">
        {results.map((track) => (
          <li key={track.id} className="list-group-item">
            {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
