import FOODS from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";

function FoodList() {
  const [foods, setFoods] = useState(FOODS);

  const deleteFood = (foodId) => {
    foods.filter((food)=> food.id !== foodId)
  }
  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food)=>{
      return <FoodBox key={food.id} food={food} deleteFood = {deleteFood}/>
      })}
    </div>
  );
}

export default FoodList;
