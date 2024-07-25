import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState("")
  const mockFood = {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
};

  return (
    <div className="App">
            <h1>LAB | React IronNutrition</h1>
            <FoodBox food={mockFood} />
        </div>
  );
}

export default App;
