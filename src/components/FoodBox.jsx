const FoodBox = ({ name, calories, servings, image, id, onDelete}) => {
  
    return(
        <div className="card-body">
        <p className="card-title">{name}</p>
      
        <img src={image} />
      
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
      
        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
      
        <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </div> 
    );
};

export default FoodBox