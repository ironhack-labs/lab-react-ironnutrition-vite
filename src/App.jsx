import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);  

  const onAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  const onDeleteFood = (foodId) => setFoods(foods.filter((food) => food.id !== foodId));

  const foodBoxes = foods.map((food) => <FoodBox key = {food.id} food = {food} onDeleteFood = {onDeleteFood}/>);


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      <AddFoodForm onAddFood = {onAddFood}/>

      {foodBoxes}

    </div>
  );
}

export default App;
