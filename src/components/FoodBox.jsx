import React, { useState } from 'react';
import { Card, Button, InputNumber } from 'antd';

function FoodBox(props) {
  const { food } = props;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = value => {
    setQuantity(value);
  };

  const handleAddToCartClick = () => {
    props.onAddToCart({ ...food, quantity });
  };

  return (
    <Card title={food.name} style={{ width: 650 }}>
      <p><img src={food.image} alt={food.name} height="125" /></p>
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
      <InputNumber min={1} defaultValue={1} onChange={handleQuantityChange} />
      <Button type="primary" onClick={handleAddToCartClick}>Add to cart</Button>
      <Button type="primary" danger onClick={() => props.onRemove(food.name)}>Delete</Button>
    </Card>
  );
}

export default FoodBox;
