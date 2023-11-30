import "./App.css";
import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    // Generate a unique id for the new food item
    newFood.id = Math.random().toString(36).substr(2, 9);
    // Add the new food item to the list
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      {/* Render the AddFoodForm component */}
      <AddFoodForm onAddFood={addFood} />

      {/* Iterate over the foods array and render a FoodBox component for each food item */}
      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDelete={() => deleteFood(food.id)}
        />
      ))}
    </div>
  );
}

export default App;
