import { useState } from 'react';
import { Divider, Input, Button, Form } from 'antd';

function AddFoodForm({ onAdd }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [calories, setCalories] = useState(0);
	const [servings, setServings] = useState(0);

	const handleNameInput = e => setName(e.target.value);
	const handleImageInput = e => setImage(e.target.value);
	const handleCaloriesInput = e => setCalories(e.target.value);
	const handleServingsInput = e => setServings(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();

		const newFood = {
			name,
			image,
			calories: +calories,
			servings: +servings,
			id: new Date().toISOString(),
		};

		onAdd(newFood);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Divider>Add Food Entry</Divider>

			<label htmlFor='name'>name</label>
			<Input
				type='text'
				id='name'
				name='name'
				value={name}
				onChange={handleNameInput}
			/>
			<label htmlFor='image'>image</label>
			<Input
				type='text'
				id='image'
				name='image'
				value={image}
				onChange={handleImageInput}
			/>
			<label htmlFor='calories'>calories</label>
			<Input
				type='number'
				id='calories'
				name='calories'
				value={calories}
				onChange={handleCaloriesInput}
			/>

			<label htmlFor='servings'>servings</label>
			<Input
				type='number'
				id='servings'
				name='servings'
				value={servings}
				onChange={handleServingsInput}
			/>

			<Button type='primary' htmlType='submit'>
				Create
			</Button>
		</form>
	);
}

export default AddFoodForm;
