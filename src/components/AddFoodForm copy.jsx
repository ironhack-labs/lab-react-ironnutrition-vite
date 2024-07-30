// Your code here
import React, { useState } from 'react';

function AddFoodForm({ addFood }) {
    
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addFood(formState);
//     setFormState({
//       name: '',
//       image: '',
//       calories: '',
//       servings: ''
//     });
//   };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
        //   name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
        //   name="image"
          value={formState.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Calories:
        <input
          type="number"
        //   name="calories"
          value={formState.calories}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Servings:
        <input
          type="number"
        //   name="servings"
          value={formState.servings}
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