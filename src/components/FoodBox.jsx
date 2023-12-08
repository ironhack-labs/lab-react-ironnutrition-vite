// Your code here
import React, { useState } from "react";

function FoodBox({ food, handleDelete }) {
  const { name, calories, image, servings } = food;
  
  const totalCalories = servings * calories;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
          <span>Total Calories: {totalCalories} kcal</span>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default FoodBox;
