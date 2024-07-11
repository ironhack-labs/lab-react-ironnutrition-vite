const FoodBox = ({ id, name, calories, image, servings, handleDelete }) => {
  return (
    <li className="foodBox">
      <img className="foodBox__image" src={image} />
      <div className="foodBox__info">
        <p className="foodBox__name">{name}</p>

        <p className="foodBox__text">Calories: {calories}</p>
        <p className="foodBox__text">Servings {servings}</p>

        <p className="foodBox__text">
          <b>Total Calories: {calories * servings} </b> kcal
        </p>

        <button
          type="button"
          className="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default FoodBox;
