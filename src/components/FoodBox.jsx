// Your code here
import AddFoodForm from "./AddFoodForm";

const FoodBox = ({food, deleteHandler}) => {
    return (
        <div>
  <p>{food.name}</p>

  <img src={food.image} alt={food.name} height={300}/>

  <p>Calories: {food.calories}</p>
  <p>Servings {food.servings}</p>

  <p>
    <b>Total Calories: {food.servings * food.calories} </b> kcal
  </p>

  <button onClick={() => deleteHandler(food.id)}>Delete</button>
</div>
    )

}

export default FoodBox;