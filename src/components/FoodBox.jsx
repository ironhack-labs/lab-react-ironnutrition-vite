// components/FoodBox.jsx
import React from "react";
import { Card, Image, Typography, Button } from "antd";

function FoodBox({ food, deleteFoodItem }) {
  const { id, name, calories, image, servings } = food;

  const handleDelete = () => {
    deleteFoodItem(id);
  };

  return (
    <Card className="FoodBox">
      <Image src={image} alt={name} />
      <Typography.Title level={4}>{name}</Typography.Title>
      <Typography.Paragraph>Calories: {calories}</Typography.Paragraph>
      <Typography.Paragraph>Servings: {servings}</Typography.Paragraph>
      <Typography.Paragraph>
        <b>Total Calories: {servings * calories} kcal</b>
      </Typography.Paragraph>
      <Button type="primary" danger onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
