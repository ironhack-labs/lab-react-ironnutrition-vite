import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function handleDeleteFood(indexToDelete) {
    console.log(indexToDelete);
    const updatedFoods = foods.filter((food, index) => index !== indexToDelete);
    console.log(("updated Foods", updatedFoods));
    setFoods(updatedFoods);

    return updatedFoods;
  }

  // function handleSubmit() {
  //   event.preventDefault();
  //   console.log("handle submit");
  //   console.log(
  //     "data:",
  //     title.value,
  //     image.value,
  //     calories.value,
  //     servings.value
  //   );
  //   const updatedFoods = foods.push({    title.value,
  //     image.value,
  //     calories.value,
  //     servings.value})
  // }

  return (
    <div className="App">
      <h2>Add Food Entry</h2>
      <AddFoodForm updateState={setFoods} />
      <h1>Foodlist</h1>
      {foods.map((food, index) => {
        return (
          <FoodBox
            key={index}
            food={food}
            onClick={() => handleDeleteFood(index)}
            style={{ border: "1px solid white" }}
          />
        );
      })}
    </div>
  );
}

export default App;
