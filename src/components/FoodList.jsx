import FOODS from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import { useState } from "react";

function FoodList() {
  const [foods, setFoods] = useState(FOODS);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food)=> food.id !== foodId)
    setFoods(filteredFoods)
  }
  const addNewFood = (newFood) => {
    setFoods([
      ...foods,
      newFood
    ])
  }
  
  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <h2>Food List</h2>
      {foods.map((food)=>{
      return <FoodBox key={food.id} food={food} deleteFood={deleteFood}/>
      })}
    </div>
  );
}

export default FoodList;
