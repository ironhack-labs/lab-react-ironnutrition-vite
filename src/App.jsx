import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';

const state = {
	foods: foodsJson,
};

function App() {
	const [foods, setFoods] = useState(state.foods);

	const deleteFood = idOfFoodToDelete =>
		setFoods(prevFoods =>
			prevFoods.filter(food => food.id !== idOfFoodToDelete)
		);

	const addFood = food =>
		setFoods(prevFoods => {
			console.log('adding ', food);
			return [food, ...prevFoods];
		});

	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>

			<AddFoodForm onAdd={addFood}></AddFoodForm>

			<ul style={{ listStyle: 'none' }}>
				{foods.map(food => (
					<FoodBox key={food.id} food={food} onDelete={deleteFood}></FoodBox>
				))}
			</ul>
		</div>
	);
}

export default App;
