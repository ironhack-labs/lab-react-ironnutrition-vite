import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (values) => {
    const newFood = { name: values.name, image: values.image, calories: values.calories, servings: values.servings };
    props.addFood(newFood);
    setName(''); // Clear input field
    setImage(''); // Clear input field
    setCalories(''); // Clear input field
    setServings(''); // Clear input field
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Name" name="name">
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item label="Image" name="image">
        <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </Form.Item>

      <Form.Item label="Calories" name="calories">
        <Input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
      </Form.Item>

      <Form.Item label="Servings" name="servings">
        <Input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
      </Form.Item>

      <Button type="primary" htmlType="submit">Create</Button>
    </Form>
  );
}

export default AddFoodForm;
