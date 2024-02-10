import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

import { useState } from "react";

function App() {


  const [foods, setFoods] = useState(foodsJson)

  const deleteFood = foodIdToDelete => {

    const filteredFoods = foods.filter(elm => {
      return elm.id != foodIdToDelete
    })

    setFoods(filteredFoods)

  }

  const addNewFood = newFood => {
    const foodsJsonCopy = [...foodsJson]
    foodsJsonCopy.unshift(newFood)
    setFoods(foodsJsonCopy)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addNewFood={addNewFood} />

      {
        foods.map(elm => {
          return <FoodBox key={elm.id} foodInfo={elm} deleteFood={deleteFood} />
        })
      }
    </div>
  );
}

export default App;
