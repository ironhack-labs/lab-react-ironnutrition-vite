import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

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
  
  const handleCreate = (food) => {
    const newList = [...foodList];
    newList.push(food);
    console.log(food,"food");
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
      <AddFoodForm handleCreate={handleCreate} />
    </div>
  );
}

export default App;
