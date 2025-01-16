import { useState } from "react";
import './AddFoodForm.css'


function AddFoodForm ({addNewFood}) {
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")
    const [servings, setServings] = useState(0)

    const handleSubmit = (e) => {
        // Evitar que el formulario se envíe y recargue la página
        e.preventDefault();

        const newFood = {
            id: Math.random().toString(36),
            name:name,
            calories:calories,
            image:image,
            servings:servings

        }
        addNewFood(newFood);

        setName("")
        setCalories(0)
        setImage("")
        setServings(0)

    }
    


    return(
        <form form className="create-food" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

            <label htmlFor="calories">Calories</label>
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)}/>

            <label htmlFor="image">Image</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required/>

            <label htmlFor="servings">Servings</label>
            <input type="number" value={servings} onChange={(e) => setServings(e.target.value)}/>

            <button type="submit">Create</button>
        </form>

    )
}

export default AddFoodForm