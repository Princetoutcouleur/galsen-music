import React, { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

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
    <div className="container mb-4">
      <form className="d-flex">
        <input
          type="text"
          value={query}
          className="form-control me-2"
          placeholder="Search for a track..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
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
