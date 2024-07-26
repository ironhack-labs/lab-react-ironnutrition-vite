import React, { useState } from 'react';

function AddFoodForm({ addFood }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && image && calories && servings) {
            addFood({
                name,
                image,
                calories: parseFloat(calories),
                servings: parseFloat(servings)
            });
            
            setName('');
            setImage('');
            setCalories('');
            setServings('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="calories">Calories</label>
                <input
                    id="calories"
                    name="calories"
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="servings">Servings</label>
                <input
                    id="servings"
                    name="servings"
                    type="number"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                />
            </div>
            <button type="submit">Add Food</button>
        </form>
    );
}

export default AddFoodForm;
