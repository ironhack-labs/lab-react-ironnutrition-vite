import {useState} from "react";

const AddFoodForm = props => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleName = event => {
        setName(event.target.value);
    };
    const handleImage = event => {
        setImage(event.target.value);
    };
    const handleCalories = event => {
        setCalories(event.target.value);
    };
    const handleServings = event => {
        setServings(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const id = Math.random() * name.length;

        const newFood = {
            name,
            image,
            calories,
            servings,
            id
        };

        props.addFoodHandler(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings(0);
    };

    return (
        <div>
            <h2>Add Food Entry</h2>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleName} /><br />

                <label>Image</label>
                <input type="text" name="image" value={image} onChange={handleImage} /><br />

                <label>Calories</label>
                <input type="number" name="calories" value={calories} onChange={handleCalories} /><br />

                <label>Servings</label>
                <input type="number" name="servings" value={servings} onChange={handleServings} /><br />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm;