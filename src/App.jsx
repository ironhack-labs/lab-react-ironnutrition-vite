import "./App.css";
import foodsJson from "./foods.json";
import {useState} from 'react';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFood = foods.filter(food => foodId !== food.id)
    setFoods(filteredFood)
  }

  const addNewFood = newFood => {
    const updatedFoodList = [newFood, ...foods];
    setFoods(updatedFoodList);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFoodHandler={addNewFood}/> 
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
