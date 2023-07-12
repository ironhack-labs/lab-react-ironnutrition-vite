// Your code here
import React from "react";


function FoodBox (props) {

    console.log(props);
    const totalCal = (props.foods.servings * props.foods.calories);

    

return (
  <div>
    <p>{props.foods.name}</p>

    <img src={props.foods.image} />

    <p>Calories: {props.foods.calories}</p>
    <p>Servings {props.foods.servings}</p>

    <p>
      <b>Total Calories: {totalCal} </b> kcal
    </p>

    <button onClick={()=> props.deleteFoods(props.foods.id)}>
      Delete 
    </button>
  </div>
);

}

export default FoodBox;