import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  return (
    <Col>
      <p>{food.name}</p>

      <img src={food.image} alt={food.name} style={{ width: '250px', height: 'auto' }} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} kcal</b>
      </p>

      <button onClick={() => deleteFood(food.id)}>Delete</button>
    </Col>
  );
}

export default FoodBox;
