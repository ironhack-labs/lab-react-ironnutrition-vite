import React from "react";

const FoodBox = ({ food, handleDelete }) => {
  const { name, calories, image, servings } = food;
  const totalCalories = servings * calories;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  );
};

export default FoodBox;
