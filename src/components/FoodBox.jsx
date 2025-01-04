function FoodBox({ food, deleteFood }) {
  const totalCalories = food.servings * food.calories;

  const containerStyle = {
    border: "1px solid grey",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "grey",
  };
  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "15px",
    backgroundColor:'white' //evitamos que las imagenes png salgan sin fondo 😉
  };

  return (
    <div style={containerStyle}>
      <p>{food.name}</p>
      <img src={food.image} style={imageStyle}  />
      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>
      <p>
      <b>Total Calories: {totalCalories} kcal</b> </p>
      <button onClick={() => deleteFood(food.name)}>Delete</button>
    </div>
  );
}
export default FoodBox;
