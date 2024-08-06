import React, { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodName) => {
    const updatedFoods = foods.filter(food => food.name !== foodName);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={addFood} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
