// SearchBar.js
import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="search-bar">
      <h2>Filter by title / order ID</h2>
      <input
        type="text"
        placeholder="Start typing to search"
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
