import "./App.css";
import { useState } from "react";
import foodData from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodItems, setFoodItems] = useState(foodData);

  const deleteFoodItem = (id) => {
    const updatedFoodItems = foodItems.filter((food) => food.id !== id);
    setFoodItems(updatedFoodItems);
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCalorieInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {name, image, calories, servings};
    props.addFood(newFood);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onSubmit={handleSubmit}/>
      {foodItems.map((food) => {
        return (
          <div>
            <FoodBox
              key={food.id}
              food={food}
              onDelete={() => deleteFoodItem(food.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
