import React, { useState } from "react";
import foodsJson from "./foods.json"; // Ensure the correct path
import FoodBox from "./components/FoodBox"; // Ensure the correct path
import AddFood from "./components/AddFoodForm";

function App() {
  // State variable to store the foods array
  const [foods, setFoods] = useState(foodsJson);

  // Rest of your App component code...

  // Function to delete a food item from the list
  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFoodToList = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      {/* <AddFood key={index} food={food} /> */}
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm AddFood={addFoodToList} />

      {foods.map((food, index) => (
        <FoodBox
          key={index}
          food={food}
          handleDelete={() => deleteFood(food.id)}
        />
      ))}
    </div>
  );
}

export default App;
