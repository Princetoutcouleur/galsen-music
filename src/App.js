import React from 'react';
import Header from './components/Header'
import Search from './components/Search';
import Playlist from './components/Playlist';
import PlayerControls from './components/PlayerControls';

function App() {
  return (
    <div className='App container-fluid'>
        <Header />
        <Search/>
        <Playlist/>
        <PlayerControls/>
    </div>
  );
}

export default App;