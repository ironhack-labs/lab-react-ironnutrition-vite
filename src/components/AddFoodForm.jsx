import { useState } from "react";

const DEFAULT_FOOD = { name: '', calories: 0 , image: '', servings: 0 }

const Form = ({onSubmit}) => {

    const [food, setFood]  =useState(DEFAULT_FOOD);
    const [errors, setErrors] = useState({});

    const handleOnChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;

        setErrors((prev) => {
            return ({
              ...prev,
              [name]: ''
            })
          })
      
          setFood((prev) => {
            return ({
              ...prev,
              [name]: value
            })
          })
    }; 

    const validateForm = () => {
        const errors = {} 

        if (!food.name) {
            errors.name = 'Name is required'
        }

        if (!food.calories) {
            errors.calories = 'Calories is required'
        }

        if (!food.servings) {
            errors.servings = 'Servings is required'
        }
      
        return errors
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault(); 

        const errors = validateForm()

        if (Object.keys(errors).lenght) {
            setErrors(errors)
            return
        } 

        onSubmit(food)
        setFood(DEFAULT_FOOD)

    }

    return (

        <form>
            <h2>Add food Entry</h2>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input onChange={handleOnChange} name="name" type="test" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                <input onChange={handleOnChange} name="image" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Calories</label>
                <input onChange={handleOnChange} name="calories"  type="number" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Servings</label>
                <input onChange={handleOnChange} name="servings" type="number" className="form-control" id="exampleInputPassword1"/>
            </div>

            {errors.name && <p className="text-danger">{errors.name}</p>}
            {errors.calories && <p className="text-danger">{errors.calories}</p>}   
            {errors.servings && <p className="text-danger">{errors.servings}</p>}   

            <button onClick={(ev) => {ev.preventDefault(); handleOnSubmit(ev)}} type="submit" className="btn btn-dark">Create</button>
        </form>
    )
   
}; 

export default Form;