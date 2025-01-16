import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBoox/FoodBox";


function App() {
  const [foods, setFoods] =useState(foodsJson);

  const deleteFood = (foodId) =>{
    const filterFood = foods.filter((food)=> food.id !== foodId)
    setFoods(filterFood)

  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>
      {foods.map((food)=>( <FoodBox deleteFood={deleteFood}  key={food.id} food={food}/>))}
        
      </div>
    </div>
  );
}

export default App;
