import { Divider, Input } from "antd";
import React, { useState } from "react";

function Search({foodData, setFilteredFoodData}) {
    const [searchElement, setSearchElement] = useState("");

    const handleSearch = (e) => {
        const element = e.target.value.toLowerCase();
        setSearchElement(element);

        const filteredFood = foodData.filter((food) => 
        food.name.toLowerCase().includes(element)
        );
        setFilteredFoodData(filteredFood);
        }; 

  return (
    <>
      <Divider></Divider>

      <label>Search</label>
      <Input 
      name="search" 
      value={searchElement}
       type="text" 
       onChange={handleSearch} 
       />
    </>
  );
}

export default Search;