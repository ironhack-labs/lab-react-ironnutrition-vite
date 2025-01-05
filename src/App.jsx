import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
function App() {
  const [food, setFood] = useState(foodsJson);
  console.log(food);
  const addFood = (newFood) => {
    setFood([...food, newFood]);
    console.log(food);
  };

  const deleteFood = (foodName) => {
    const updatedFood = food.filter((eachFood) => eachFood.name !== foodName);
    setFood(updatedFood);
  };

  return (
    <div className="App">
      <div>
        <AddFoodForm addFood={addFood} />
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
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
