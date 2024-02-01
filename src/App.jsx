import React, { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import foodsData from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsData);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    // Genera un identificador único para el nuevo alimento
    newFood.id = foods.length + 1;
    
    // Agrega el nuevo alimento a la lista
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm onAddFood={handleAddFood} />

      <div className="container">
        <ul className="list-group">
          {foods.map((food) => (
            <li key={food.id} className="list-group-item text-sm">
              <FoodBox food={food} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
