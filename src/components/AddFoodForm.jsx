import { useState } from "react";

const initialData =
    {
        name: '',
        image: '',
        calories: 0,
        servings: 0
    }

function AddFoodForm({onAddFood}) {
    const [data, setData] = useState(initialData);

    const onSubmit = (e) => {
        e.preventDefault();
        onAddFood({...data, id: crypto.randomUUID()});

        setData(initialData);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="image">Image</label>
                <input name="image" type="text" id="image" value={data.image} onChange={(e) => setData({...data, image: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="calories">Calories</label>
                <input name="calories" type="number" min="0" id="calories" value={data.calories} onChange={(e) => setData({...data, calories: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="servings">Servings</label>
                <input name="servings" type="number" min="0" id="servings" value={data.servings} onChange={(e) => setData({...data, servings: e.target.value})}/>
            </div>

            <button type="submit">Create</button>

        </form>
    )
}

export default AddFoodForm;