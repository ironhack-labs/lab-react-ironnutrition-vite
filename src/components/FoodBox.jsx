import React from "react";

function FoodBox(props) {
  const { food } = props;
  return (
    <div>
      <p>{food.name}</p>

      <img src={food.image} alt={food.name} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
      <b>Total Calories: {food.servings * food.calories} kcal</b>
      </p>

      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
