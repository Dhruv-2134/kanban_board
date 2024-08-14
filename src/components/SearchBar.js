import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className="Bar">
      <input 
      type="text" 
      placeholder="Search Tasks..." 
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
    </div>
  );
}

export default SearchBar;