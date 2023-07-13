import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const removeFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const handleSearch = (filteredItems) => {
    setFilteredFoods(filteredItems);
  };

  return (
    <>
      <h1>LAB | React IronNutrition</h1>
      <Search foods={foods} onSearch={handleSearch} />
      {filteredFoods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDelete={() => removeFood(food.id)}
        />
      ))}
      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDelete={() => removeFood(food.id)}
        />
      ))}

      <AddFoodForm AddFood={addFood} />
    </>
  );
}

export default FoodList;
