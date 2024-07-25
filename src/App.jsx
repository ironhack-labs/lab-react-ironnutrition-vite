import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div>
      {/* <h1>LAB | React IronNutrition</h1> */}
      <FoodList />
    </div>
  );
};

export default App;