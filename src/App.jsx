import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBoox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  // console.log(foods);

  function handleDeleteFood(index, foodKey) {
    console.log(index);
    const updatedFoods = foods.filter((food) => foodKey !== index);
    setFoods(updatedFoods);

    return updatedFoods;
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => {
        return (
          <FoodBox
            key={index}
            food={food}
            onClick={() => handleDeleteFood(index, food.key)}
          />
        );
      })}
    </div>
  );
}

export default App;
