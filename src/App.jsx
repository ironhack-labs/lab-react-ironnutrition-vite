import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {

  const [foods, setFoods] = useState(foodsJson);

  const deleteHandler = (foodId) => {
    const updatedFoods = foods.filter(food => foodId !== food.id)
    setFoods(updatedFoods);
  };

//aqui
  const addFoodHandler = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addFoodHandler={addFoodHandler} />
    <div>
    {foods.map((food) => (
      <FoodBox 
      key={food.id} 
      food={food}
     deleteHandler={() => deleteHandler(food.id)} />
    ))}
    </div> 
     </div>
  );
}


export default App;
