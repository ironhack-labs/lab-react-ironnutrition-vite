const FoodBox = ({ name, calories, servings, image, id, onDelete}) => {
    let totalCalories = servings * calories;
    return(
        <div>
        <p>{name}</p>
      
        <img src={image} />
      
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
      
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
      
        <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </div> 
    );
};

export default FoodBox