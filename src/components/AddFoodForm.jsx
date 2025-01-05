import { useState } from "react";
function AddFoodForm({ addFood }) {
   
    const [newFood, setNewForm] = useState({
        name: '',
        image: '',
        calories: '',
        servings: ''
    })
    
    const handleChange = e => {
        setNewForm({
            ...newFood,
            [e.target.name] : e.target.value
        })
    }
    console.log(newFood)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addFood(newFood); 
       
      };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        <input
        onChange={handleChange}
          type="text"
          name="name"
          placeholder="Food Name"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
        onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
        onChange={handleChange}
          type="number"
          name="calories"
          placeholder="Calories"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
        onChange={handleChange}
          type="number"
          name="servings"
          placeholder="Servings"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleSubmit}
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Create
        </button>
      </form>
    </>
  );
}
export default AddFoodForm;
