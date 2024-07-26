import React, { useState } from 'react';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default FoodList;
