import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Playlist from './components/Playlist';
import PlayerControls from './components/PlayerControls';
import AuthComponent from './components/AuthComponent';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className='App container-fluid'>
      {!token ? (
        <AuthComponent setToken={setToken} />
      ) : (
        <div>
          <Header />
          <Search token={token} />
          <Playlist token={token} />
          <PlayerControls token={token} />
        </div>
      )}
    </div>
  );
}

export default App;
