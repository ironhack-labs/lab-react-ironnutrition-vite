import { useState } from "react";
import { Divider, Input } from "antd";

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="search"
        value={searchValue}
        type="text"
        onChange={handleSearchChange}
      />
    </>
  );
}

export default Search;