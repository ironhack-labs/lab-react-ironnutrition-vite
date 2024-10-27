import { useState } from 'react';

function AddFoodForm({ onAdd }) {
	const handleSubmit = e => {
		e.preventDefault();
		onAdd({
			name,
			image,
			calories: +calories,
			servings: +servings,
			id: new Date().toISOString(),
		});
	};

	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [calories, setCalories] = useState(0);
	const [servings, setServings] = useState(0);

	const handleNameInput = e => setName(e.target.value);
	const handleImageInput = e => setImage(e.target.value);
	const handleCaloriesInput = e => setCalories(e.target.value);
	const handleServingsInput = e => setServings(e.target.value);

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<ul style={{ listStyle: 'none' }}>
				<li>
					<label htmlFor='name'>name</label>
					<input
						type='text'
						id='name'
						name='name'
						value={name}
						onChange={handleNameInput}
					/>
				</li>
				<li>
					<label htmlFor='image'>image</label>
					<input
						type='text'
						id='image'
						name='image'
						value={image}
						onChange={handleImageInput}
					/>
				</li>
				<li>
					<label htmlFor='calories'>calories</label>
					<input
						type='number'
						id='calories'
						name='calories'
						value={calories}
						onChange={handleCaloriesInput}
					/>
				</li>
				<li>
					<label htmlFor='servings'>servings</label>
					<input
						type='number'
						id='servings'
						name='servings'
						value={servings}
						onChange={handleServingsInput}
					/>
				</li>
			</ul>

			<button type='submit'>Create</button>
		</form>
	);
}

export default AddFoodForm;
