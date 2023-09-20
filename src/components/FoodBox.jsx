// Your code here
import React from "react"; //without this no react components will be displayed

function FoodBox({ food, deleteFood }) {
  // console.log(props);
  return (
    <div className="food-box">
      <div>
        <h2>{food.name}</h2>

        <img src={food.image} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
          <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>

        <button onClick={() => deleteFood(food.id)}>Delete</button>
      </div>
    </div>
  );
}

export default FoodBox;
