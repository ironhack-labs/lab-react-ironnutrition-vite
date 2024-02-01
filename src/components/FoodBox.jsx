
const FoodBox = ({food, onDelete}) => {
    const { id ,name, calories, image, servings } = food;

    const handleDelete = () => {
      onDelete(id);
    };

    return (
        <div>
        <p>{name}</p>
      
        <img src={image} alt={name} className="img-fluid" />

      
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
      
        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
      
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
        Delete
      </button>      
      </div>
    );
};

export default FoodBox;