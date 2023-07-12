import React, { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFoodItem = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };

  const addFoodItem = (newFoodItem) => {
    setFoods([...foods, newFoodItem]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFoodItem={addFoodItem} />
      <div>
        {foods.map((food) => (
          <FoodBox
            key={food.name}
            food={food}
            deleteFoodItem={deleteFoodItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
