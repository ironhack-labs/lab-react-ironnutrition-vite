import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foodList, setFoodList] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foodList.map((dish) => {
        return (
          <FoodBox food={dish} key={dish.name}/>
        )
      })}
    </div>
  );
}

export default App;
