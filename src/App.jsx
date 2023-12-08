import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import React, { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  
  const handleAddFood = (newFood) => {
    const newFoodItem = { 
      ...newFood 
    };
      setFoods ([...foods, newFoodItem]);
  };

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm handleAddFood={handleAddFood} />

      {foods.map((food)=> (
        <FoodBox 
        key={food.id}
        food={food}
        handleDelete={() => handleDelete(food.id)} 
        />
      ))};
    </div>
  );
};


export default App;
