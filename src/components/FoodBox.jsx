import propTypes from "prop-types";
import "./FoodBox.css";

function FoodBox({ food,onDelete }) {
  const { id, name, image, calories, servings } = food;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name}/>
      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>
      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>
      <button onClick={() => {onDelete(id)}}>Delete</button>
    </div>
  );
}

FoodBox.propTypes = {
  food: propTypes.object,
};

export default FoodBox;
