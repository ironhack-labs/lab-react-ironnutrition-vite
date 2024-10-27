import FoodBox from './FoodBox';

function FoodList({ foods, deleteFood }) {
	const NoFoodMessage = <p>Oops! There is no more content to show.</p>;

	const FoodBoxes = (
		<ul style={{ display: 'flex', flexWrap: 'wrap' }}>
			{foods.map(food => (
				<FoodBox key={food.id} food={food} onDelete={deleteFood} />
			))}
		</ul>
	);

	if (!foods.length) return NoFoodMessage;
	return FoodBoxes;
}

export default FoodList;
