import './App.css';
import foodsJson from './foods.json';

const state = foodsJson;

function App() {
	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>
			<pre style={{ textAlign: 'left' }}>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
}

export default App;
