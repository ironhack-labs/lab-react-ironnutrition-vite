function FoodBox({ food, onDelete }) {
	const { name, image, calories, servings } = food;

	const handleDelete = () => onDelete(food.id);

	return (
		<div style={{ border: '1px solid lightgrey', padding: '2rem' }}>
			<h3>{name}</h3>

			<img src={image} style={{ maxWidth: '30vw' }} />

			<p>Calories: {calories}</p>
			<p>Servings {servings} </p>

			<p>
				<b>Total Calories: {servings * calories} </b> kcal
			</p>

			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

export default FoodBox;
