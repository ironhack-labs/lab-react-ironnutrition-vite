import React, { useState } from 'react';
import foodsJson from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h2>Add Food Entry</h2>
      <AddFoodForm addFood={(food) => setFoods([...foods, food])} />
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={()=>deleteFood(food.id)} />
      ))}
    </div>
  );
}

export default App;