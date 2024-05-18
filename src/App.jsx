import "./App.css";
import foodsJson from "./foods.json";
import {useState} from 'react';
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFood = foods.filter(food => foodId !== food.id)
    setFoods(filteredFood)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map(oneFood => {
        return <FoodBox 
        food={oneFood}
        deleteHandler={deleteFood}
            key={oneFood.id}
            name={oneFood.name}
            picture={oneFood.image}
            calories={oneFood.calories}
            servings={oneFood.servings}
        />
      })}
    </div>
  );
}

export default App;
