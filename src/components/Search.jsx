import React from 'react';
import { Input } from 'antd';

function Search({ searchTerm, handleSearch }) {
  return (
    <Input
      type="text"
      placeholder="Search for a food item"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default Search;
