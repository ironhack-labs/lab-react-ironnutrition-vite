import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";



function App() {

const [foods, setFoods]= useState(foodsJson);


const deleteFoods = (currentFoodId => {
  
  // let filteredFoods = foods.filter((food) => food.id !== currentFoodId);

  // return setFoods(filteredFoods)});


setFoods((prevFoods)=> prevFoods.filter((food) => food.id !== currentFoodId))})


const addFoods = (newFood => {

setFoods((prevFoods)=> [...prevFoods, newFood])


})



  
  return (
    <div>
      <h1> Food Selection </h1>
      <AddFoodForm addFoods={addFoods} />
      {foods.map((food) => (
        <div className="App" key={food.id}>
          <FoodBox foods={food} deleteFoods={deleteFoods} />
        </div>
      ))}
    </div>
  );
}

export default App;
