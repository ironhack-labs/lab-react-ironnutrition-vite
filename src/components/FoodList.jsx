import React, { useState } from 'react';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);

    const handleDelete = (id) => {
        const updatedFoods = foods.filter(food => food.id !== id);
        setFoods(updatedFoods);
      };

    const handleAddFood = (newFood) => {
        setFoods([newFood, ...foods]);
    };

    return (
        <div>
        <AddFoodForm onAddFood={handleAddFood} />
        {foods.map(food => (
          <FoodBox key={food.id} food={food} onDelete={() => handleDelete(food.id)} />
        ))}
      </div>
    )
}

export default FoodList;