import { useState } from "react";
import { Divider, Input } from "antd";

function Search({ foods, onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    onSearch(filteredFoods);
  };

  return (
    <>
      <Divider></Divider>

      <label>Search</label>
      <Input
        name="search"
        value={searchInput}
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        onPressEnter={handleSearch}
      />
    </>
  );
}

export default Search;
