import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import Foodbox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foodsToDisplay, setFoodsToDisplay] = useState(foodsJson)

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  }

  const deleteFood = (foodName) => {
    const newList = foodsToDisplay.filter((foodsToDisplay) => {
      return  foodsToDisplay.name !== foodName;
    });
    setFoodsToDisplay(newList);
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <AddFoodForm callbackToAddFood={addNewFood}/>
  {foodsToDisplay.map(function(foodObj, index){
    return (
      <div>
      <Foodbox food={foodObj} 
      foodsArr={foodsToDisplay}
      callbackToDelete={deleteFood}
      key={foodObj.id}
      />
      </div>
    )
  })}
  
    </div>
  );
}

export default App;
