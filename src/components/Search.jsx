import { useState } from "react";
import { Divider, Input, Button } from "antd";

function Search({ searchTerm, handleChange }) {

  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
}

export default Search;
