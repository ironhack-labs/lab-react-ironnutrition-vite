import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };
  const handleSubmit = (e, name, image, servings, calories) => {
    e.preventDefault();
    const newFood = {
      id: foods.length + 1,
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm handleSubmit={handleSubmit} />
      <FoodList foods={foods} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
