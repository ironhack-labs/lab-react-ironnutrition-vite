import { useState } from "react";

function AddFoodForm({addNewFood}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      id: Math.random().toString(36),
      name,
      image,
      calories,
      servings
    }
    addNewFood(newFood);

    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  }


  return (
    <div>
    <h2>Add Food</h2>
    <form className="addFood" onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="image">Image </label>
      <input type="text" name="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <label htmlFor="calories">Calories </label>
      <input type="number" name="calories" value={calories} onChange={(e)=>setCalories(e.target.value)}/>
      <label htmlFor="servings">Servings </label>
      <input type="number" name="servings" value={servings} onChange={(e)=>setServings(e.target.value)}/>
      <button type="submit">Create</button>
    </form>
    </div>
  )
}

export default AddFoodForm;