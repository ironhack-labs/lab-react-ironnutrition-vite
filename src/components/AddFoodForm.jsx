import { useState } from "react"
import { Divider, Input, Button } from "antd";

function AddFoodForm({ addNewFood }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(Number(e.target.value));
    const handleServingsInput = e => setServings(Number(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        console.log("Submitted: ", newFood);
        addNewFood(newFood);
        // Reset the state
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name: </label>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={handleNameInput}
            />
            <label>Image: </label>
            <Input
                type="text"
                name="image"
                value={image}
                onChange={handleImageInput}
            />
            <label>Calories: </label>
            <Input
                type="number"
                name="calories"
                value={calories}
                onChange={handleCaloriesInput}
            />
            <label>Serving: </label>
            <Input
                type="number"
                name="serving"
                value={servings}
                onChange={handleServingsInput}
            />
            <Button type="submit" >Create</Button>
        </form>

    );
}
export default AddFoodForm;