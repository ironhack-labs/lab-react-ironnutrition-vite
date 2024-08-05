import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function removeFood(name) {
    setFoods(foods.filter((food) => food.name !== name));
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox key={food.name} food={food} onRemove={removeFood} />
    </div>
  );
}

export default App;
