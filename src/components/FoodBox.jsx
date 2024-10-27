function FoodBox({ food }) {
	const { name, image, calories, servings } = food;

	return (
		<div style={{ border: '1px solid lightgrey', padding: '2rem' }}>
			<h3>{name}</h3>

			<img src={image} style={{ maxWidth: '40vw' }} />

			<p>Calories: {calories}</p>
			<p>Servings {servings} </p>

			<p>
				<b>Total Calories: {servings * calories} </b> kcal
			</p>

			<button>Delete</button>
		</div>
	);
}

export default FoodBox;
