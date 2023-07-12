function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings } = food;
  const totalCalories = servings * calories;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} </b> kcal
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;
