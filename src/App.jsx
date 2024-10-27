import './App.css';
import { useState } from 'react';

import foodsJson from './foods.json';

import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import Search from './components/Search';

const state = {
	foods: foodsJson,
};

function App() {
	const [foods, setFoods] = useState(state.foods);
	const [filteredFoods, setFilteredFoods] = useState(foods);
	const [filterIsActive, setFilterIsActive] = useState(false);

	const deleteFood = idOfFoodToDelete => {
		setFoods(prevFoods =>
			prevFoods.filter(food => food.id !== idOfFoodToDelete)
		);
		setFilteredFoods(prevFoods =>
			prevFoods.filter(food => food.id !== idOfFoodToDelete)
		);
	};

	const addFood = food => {
		setFoods(prevFoods => [food, ...prevFoods]);
		setFilteredFoods(prevFoods => [food, ...prevFoods]);
	};

	const filterFoodList = searchTerm => {
		if (!searchTerm) {
			setFilterIsActive(false);
			setFilteredFoods(foods);
		}

		setFilterIsActive(true);
		setFilteredFoods(
			foods.filter(food => {
				return food.name.toLowerCase().includes(searchTerm.toLowerCase());
			})
		);
	};

	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>

			<AddFoodForm onAdd={addFood} />
			<Search onSearch={filterFoodList} />
			<FoodList
				foods={filterIsActive ? filteredFoods : foods}
				deleteFood={deleteFood}
			/>
		</div>
	);
}

export default App;
