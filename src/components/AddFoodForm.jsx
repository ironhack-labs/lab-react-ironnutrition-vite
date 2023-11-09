import { useState } from "react";
import "../index.css";

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        props.callbackToAddFood(newFood);

        setName("");
        setImage("");
        setCalories("")
        setServings("")

    }

    return (
        <div>
            <form className="formStyle" onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input className="formInput"
                        type="text"
                        name="name"
                        placeholder="enter a food"
                        required={true}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <br></br>

                <label>
                    Image:
                    <input className="formInput"
                        type="text"
                        name="image"
                        placeholder="enter an image"
                        required={true}
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </label>

                <br></br>

                <label>
                    Calories:
                    <input className="formInput"
                        type="number"
                        name="calories"
                        placeholder="enter calories"
                        required={true}
                        value={calories}
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                </label>

                <br></br>

                <label>
                    Servings:
                    <input className="formInput"
                        type="number"
                        name ="servings"
                        placeholder="enter servings"
                        required={true}
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }}
                    />
                </label>

                <br></br>

                <button>Create</button>
            </form >
        </div>
    );
}

export default AddFoodForm;