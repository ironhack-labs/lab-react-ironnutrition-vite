import React, { useState } from 'react';
import { Divider, Input, Button } from "antd";

export default function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood({ name, image, calories: Number(calories), servings: Number(servings) });
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <div>
        <label>Name</label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Image URL</label>
        <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <div>
        <label>Calories</label>
        <Input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
      </div>
      <div>
        <label>Servings</label>
        <Input type="number" value={servings} onChange={(e) => setServings(e.target.value)} required />
      </div>
      <Button type="submit">Add Food</Button>
    </form>
  );
}
