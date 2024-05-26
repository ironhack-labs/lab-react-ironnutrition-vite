import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foodList, setFoodList] = useState(foodsJson);
  const handleDelete = (foodId) => {
    const newList = [...foodList];
    const indexToDelete = newList.findIndex((item) => {
      return item.id === foodId;
    });
    newList.splice(indexToDelete, 1);
    setFoodList(newList);
  };
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foodList.map((dish) => {
        return (
            <FoodBox
            food={dish}
            onDelete={handleDelete}
            key={dish.id}
          />
        );
      })}
    </div>
  );
}

export default App;
