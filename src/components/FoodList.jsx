import FoodBox from "./FoodBox";

const FoodList = ({ foods, handleDelete }) => {
  return (
    <ul>
      {foods.map((food) => (
        <FoodBox key={food.id} {...food} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default FoodList;
