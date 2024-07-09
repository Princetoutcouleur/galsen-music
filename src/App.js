import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Playlist from "./components/Playlist";
import PlayerControls from "./components/PlayerControls";
import AuthComponent from "./components/AuthComponent";

function App() {
  const [token, setToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App container-fluid">
      {!token ? (
        <AuthComponent setToken={setToken} />
      ) : (
        <div>
          <Header />
          <Search onSearchResults={handleSearchResults} />
          <Playlist token={token} searchResults={searchResults} />
          <PlayerControls token={token} />
        </div>
      )}
    </div>
  );
}

export default App;
