// Your code here
import { Input, Button } from "antd";

export default function AddFoodForm({
  handleName,
  handleCalories,
  handleImage,
  handleServings,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input onChange={handleName} name="name" type="text" />
      <label htmlFor="image">Image</label>
      <Input onChange={handleImage} name="image" type="text" />

      <label htmlFor="calories">Calories</label>
      <Input onChange={handleCalories} name="calories" type="number" />

      <label htmlFor="servings">Servings</label>
      <Input onChange={handleServings} name="servings" type="number" />
      <button type="submit">Create</button>
    </form>
  );
}
