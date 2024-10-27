import { Card, Col, Button } from 'antd';

function FoodBox({ food, onDelete }) {
	const { name, image, calories, servings } = food;

	const handleDelete = () => onDelete(food.id);

	return (
		<Col>
			<Card title={name} style={{ width: 230, margin: 10 }}>
				<img src={image} height={60} alt='food' />
				<p>Calories: {calories}</p>
				<p>Servings {servings}</p>
				<p>
					<b>Total Calories: {calories * servings}</b> kcal
				</p>

				<Button type='primary' onClick={handleDelete}>
					Delete
				</Button>
			</Card>
		</Col>
	);
}

export default FoodBox;

// function FoodBox({ food, onDelete }) {
// 	const { name, image, calories, servings } = food;

// 	const handleDelete = () => onDelete(food.id);

// 	return (
// 		<li style={{ border: '1px solid lightgrey', padding: '2rem' }}>
// 			<h3>{name}</h3>

// 			<img src={image} style={{ maxWidth: '30vw' }} />

// 			<p>Calories: {calories}</p>
// 			<p>Servings {servings} </p>

// 			<p>
// 				<b>Total Calories: {servings * calories} </b> kcal
// 			</p>

// 			<button onClick={handleDelete}>Delete</button>
// 		</li>
// 	);
// }

// export default FoodBox;
