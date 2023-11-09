import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import Foodbox from "./components/FoodBox";

function App() {

  const [foodsJson, setFoodsJson] = useState("")

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foodsJson];
    setFoodsJson(newList);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
  
    <Foodbox food={ {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    } } 
    foodsArr={foodsJson} callbackToAdd={addNewFood}
    
    />

    </div>
  );
}

export default App;
