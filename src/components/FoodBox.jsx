function FoodBox(props) {
  const {food, deleteFood} = props;
  const handleDelete = () => {
    const foodCopy = {...food};
    deleteFood(foodCopy);
  }
  return (
    <div className="food-card">
      <section>
      <h2>{food.name}</h2>

      <img src={food.image} alt={food.name} width="300"/>

      <p>Calories: {food.calories}</p>
      <p>Servings <b>{food.servings}</b></p>

      <p>
        <b>
          Total Calories: {food.servings * food.calories}{" "}
        </b>{" "}
        kcal
      </p>
      <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
    
  );
}

export default FoodBox;
