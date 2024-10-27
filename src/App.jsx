import './App.css';
import { useState } from 'react';

import foodsJson from './foods.json';

import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';

const state = {
	foods: foodsJson,
};

function App() {
	const [foods, setFoods] = useState(state.foods);

	const deleteFood = idOfFoodToDelete =>
		setFoods(prevFoods =>
			prevFoods.filter(food => food.id !== idOfFoodToDelete)
		);

	const addFood = food => {
		setFoods(prevFoods => {
			return [food, ...prevFoods];
		});
	};

	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>

			<AddFoodForm onAdd={addFood}></AddFoodForm>
			<FoodList foods={foods} deleteFood={deleteFood} />
		</div>
	);
}

export default App;
