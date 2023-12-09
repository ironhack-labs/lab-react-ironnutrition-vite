import { useState } from "react";
export function FoodForm ({foodState,setState}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
  
    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newFood = { name, image, calories, servings };
     
      setState([...foodState,newFood]);
   setName('');
      setImage('');
setCalories('');
     setServings('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={handleNameInput} />
        </div>
  
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text" name="image" id="image" value={image} onChange={handleImageInput} />
        </div>
  
        <div>
          <label htmlFor="calories">Calories:</label>
          <input type="number" name="calories" id="calories" value={calories} onChange={handleCaloriesInput} />
        </div>
  
        <div>
          <label htmlFor="servings">Servings:</label>
          <input type="number" name="servings" id="servings" value={servings} onChange={handleServingsInput} />
        </div>
  
        <button type="submit">Add Food</button>
      </form>
    );
}