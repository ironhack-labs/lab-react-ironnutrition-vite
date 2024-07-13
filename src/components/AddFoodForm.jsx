import { Button } from "flowbite-react"

export default function AddFoodForm({foodname, calories, servings, image, handleName, handleCalories, handleServings, handleImage, handleSubmit}) { 
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" onChange={handleName} value={foodname} />
        <label htmlFor="calories">Calories</label>
        <input type="number" id="calories" name="calories" placeholder="Calories" onChange={handleCalories} value={calories} />
        <label htmlFor="servings">Servings</label>
        <input type="number" id="servings" name="servings" placeholder="Servings" onChange={handleServings} value={servings} />
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" placeholder="Image" onChange={handleImage} value={image} />
        <Button className="mt-5" type="submit">Create new food</Button>
    </form>
  )
}
