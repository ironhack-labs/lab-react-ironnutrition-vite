import { useState } from 'react'

const AddFoodForm = ({ addFoodHandler }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleCalories = (event) => {
    setCalories(event.target.value);
  };

  const handleServings = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      id: Date.now(), // para adicionar um id único
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    addFoodHandler(newFood);

    // Para limpar o formulário depois do usuário preencher e submeter
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        
        <label>Image</label>
        <input type="text" name="image" value={image} onChange={handleImage} />

        <label>Calories</label>
        <input type="number" name="calories" value={calories} onChange={handleCalories} />

        <label>Servings</label>
        <input type="number" name="servings" value={servings} onChange={handleServings} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm;