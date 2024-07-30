// Your code here
import React, { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [foodToBeAdded, setFoodToBeAdded] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value); //log the value of the input
    const foodToBeAddedCopy = { ...foodToBeAdded }; //copy the food object
    foodToBeAddedCopy[event.target.name] = event.target.value; //update the copy with the new value
    setFoodToBeAdded(foodToBeAddedCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the default form behavior
    addFood(foodToBeAdded); //add the food to the list

    const f={
        name: foodToBeAdded.name,
        image: foodToBeAdded.image,
        calories: foodToBeAdded.calories,
        servings: foodToBeAdded.servings,
    }
    console.log(f);

    setFoodToBeAdded({ //reset the form
      name: '',
      image: '',
      calories: '',
      servings: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={foodToBeAdded.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={foodToBeAdded.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Calories:
        <input
          type="number"
          name="calories"
          value={foodToBeAdded.calories}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Servings:
        <input
          type="number"
          name="servings"
          value={foodToBeAdded.servings}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;