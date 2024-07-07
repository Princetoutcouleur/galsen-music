import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song..."
        className="px-4 py-2 border rounded"
      />
      <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
