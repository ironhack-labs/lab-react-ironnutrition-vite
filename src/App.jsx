import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [food, setFood] = useState(foodsJson);
  console.log("hi", food)
  const deleteFood = (foodName) => {
    const updatedFood = food.filter((eachFood) => eachFood.name !== foodName)
    setFood(updatedFood)
  }
  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        {food.map((eachFood) => {
          return (
            <div key={eachFood.name + eachFood.image}>
              <FoodBox
                deleteFood={deleteFood}
                food={{
                  name: `${eachFood.name}`,
                  calories: `${eachFood.calories}`,
                  image: `${eachFood.image}`,
                  servings: `${eachFood.servings}`,
                }}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;
