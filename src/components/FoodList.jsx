import React, { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import { Divider, Row } from "antd";
import Search from "./Search";

export default function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const handleDelete = (name) => {
    const updatedFoods = foods.filter((food) => food.name !== name);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const handleSearch = (searchValue) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredFoods(filtered);
  };


  return (
    <div>
      <AddFoodForm onAddFood={handleAddFood} />
      <Search onSearch={handleSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={handleDelete} />
      ))}
      </Row>
      
      {/* <h2>Add Food Entry</h2> */}
    </div>
  );
}
