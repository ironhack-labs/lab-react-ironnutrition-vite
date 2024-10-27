import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';

const state = {
	foods: foodsJson,
};

function App() {
	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>

			<ul style={{ listStyle: 'none' }}>
				{state.foods.map((food, i) => (
					<li key={i}>
						<FoodBox food={food}></FoodBox>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
