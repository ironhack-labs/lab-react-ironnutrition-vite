import React from 'react';

const FoodBox = ({food,deleteFood}) => {

  return (
    <div>
        <h3>{food.name}</h3>
        <img src={food.image} height={60}/>
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
            <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>

        <button onClick={deleteFood}>Delete</button>
        </div>
  );
};

export default FoodBox;