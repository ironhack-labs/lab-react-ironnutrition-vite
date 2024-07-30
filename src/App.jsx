import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"; // Import the Search component
import { Typography, List } from 'antd';

const { Title } = Typography;

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function removeFood(name) {
    setFoods(foods.filter(food => food.name !== name));
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function addToCart(item) {
    setCart([...cart, item]);
  }

  const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalCalories = cart.reduce((total, item) => total + item.calories * item.quantity, 0);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <h2>Food List</h2>
      <AddFoodForm addFood={addFood} />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} /> {/* Use the Search component */}
      {filteredFoods.length > 0 ? (
        filteredFoods.map((food) => (
          <FoodBox key={food.name} food={food} onRemove={removeFood} onAddToCart={addToCart} />
        ))
      ) : (
        <Title level={2}>Oops! There is no more content to show.</Title>
      )}
      <h2>Shopping Cart</h2>
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`Quantity: ${item.quantity}, Total calories: ${item.calories * item.quantity}`}
            />
          </List.Item>
        )}
      />
      <p>Total Calories: {totalCalories}</p>
    </div>
  );
}

export default App;
