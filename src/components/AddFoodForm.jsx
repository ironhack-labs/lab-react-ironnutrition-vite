export default function AddFoodForm({onSubmit}) {
  return (
    <div className="AddFoodForm">
      <form>
        <label>Name</label>
        <input name="name" type="text" />
        <label>Image</label>
        <input name="image" type="text" />
        <label>Calories</label>
        <input name="calories" type="number" />
        <label>Servings</label>
        <input name="servings" type="number" />
        <button onClick={onSubmit}>Create</button>
      </form>
    </div>
  );
}
