import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox"; //mistake here on not putting the proper route
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFood] = useState(foodsJson);

  const addNewFood = (food) => {
    const updatedFood =[...foods, food];
    setFood(updatedFood);
  }
  const deleteFood = (foodId) => {
    const updatedFoodList = foods.filter((deleteFood) => {
      return deleteFood.id !== foodId;
    });
    setFood(updatedFoodList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood = {addNewFood}/>
      {foods.map((food, index) => {
        return (
          <FoodBox key={index} food={food} deleteFood={deleteFood} />
          //     <FoodBox food={ {
          //   name: "Orange",
          //   calories: 85,
          //   image: "https://i.imgur.com/abKGOcv.jpg",
          //   servings: 1
          // } } />
        );
      })}
    </div>
  );
}

export default App;
