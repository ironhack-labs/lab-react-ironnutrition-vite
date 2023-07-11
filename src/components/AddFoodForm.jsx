import React, { useState } from "react";

export default function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit");
    console.log("data:", name, image, calories, servings);

    props.updateState((prevItems) => [
      { name, image, calories, servings },
      ...prevItems,
    ]);
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="Image"
      />

      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
        placeholder="Calories"
      />

      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        id="servings"
        name="servings"
        value={servings}
        onChange={(event) => setServings(event.target.value)}
        placeholder="Servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}
