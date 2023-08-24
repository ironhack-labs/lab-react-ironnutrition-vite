import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";




function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];

    setFoods(updatedFood);
  }
  
  const deleteFoods = (foodsId) => {
    const foodsCopy = [...foods];
    foods.forEach((food, index) => {
      if(food.id == foodsId) {
        foodsCopy.splice(index,1);
      }
    })
    setFoods(foodsCopy);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => {
        return(
          <FoodBox 
            key={food.id}
            food={food}
            clickToDelete={deleteFoods}
          />

        )
      })}
      <AddFoodForm addNewFood={addNewFood}/>
    </div>
  );
}

export default App;
