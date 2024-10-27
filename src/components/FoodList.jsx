import FoodBox from './FoodBox';

function FoodList({ foods, deleteFood }) {
	const NoFoodMessage = <p>No foods added yet!</p>;

	const FoodBoxes = (
		<ul style={{ listStyle: 'none' }}>
			{foods.map(food => (
				<FoodBox key={food.id} food={food} onDelete={deleteFood} />
			))}
		</ul>
	);

	if (!foods.length) return NoFoodMessage;
	return FoodBoxes;
}

export default FoodList;
