import React, { useState } from "react";
import { Card, Button } from "antd";

function FoodBox(prop) {
  const { food } = prop;
  return (
    <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
      <img src={food.image} alt={food.name} height={60} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
      <Button type="primary" onClick={() => prop.onRemove(food.name)}>
        Delete{" "}
      </Button>
    </Card>
  );
}

export default FoodBox;
