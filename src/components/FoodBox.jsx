import { Card } from "flowbite-react";

export default function FoodBox({ food, deleteFood }) {
  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="food"
        imgSrc={food.image}
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {food.name}
        </h5>
        <div className="flex justify-between flex-col">
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            Calories: {food.calories}
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            Servings: {food.servings}
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            Total Calories: {food.calories * food.servings} kcal
          </span>
          <button
            onClick={() => deleteFood(food.name)}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Delete
          </button>
        </div>
      </Card>
    </>
  );
}
