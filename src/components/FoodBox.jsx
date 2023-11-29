export default function FoodBox({ food, onDelete }) {
  return (
    <div>
      <p>{food.name}</p>
      <img src={food.image} />
      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
