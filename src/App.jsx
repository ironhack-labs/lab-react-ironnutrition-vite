import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
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

	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>

			<ul style={{ listStyle: 'none' }}>
				{foods.map(food => (
					<li key={food.id}>
						<FoodBox food={food} onDelete={deleteFood}></FoodBox>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
