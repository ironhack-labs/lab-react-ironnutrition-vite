// Your code here
import React, { useState } from 'react';

function AddFoodForm(props) {
    const { onAddFood } = props;

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('0');
    const [servings, setServings] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
        onAddFood(newFood);
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Name: </label>
        <input 
        type="text" 
        id="name" 
        name="name"
        value={name} 
        onChange={(e) => setName(e.target.value)}/>
      </fieldset>
      <fieldset>
        <label htmlFor="image">Image: </label>
        <input 
        type="text" 
        id="image" 
        name="image"
        value={image} 
        onChange={(e) => setImage(e.target.value)}/>
      </fieldset>
      <fieldset>
        <label htmlFor="calories">Calories: </label>
        <input 
        type="number" 
        id="calories" 
        name="calories"
        value={calories} 
        onChange={(e) => setCalories(e.target.value)}/>
      </fieldset>
      <fieldset>
        <label htmlFor="servings">Servings: </label>
        <input 
        type="number" 
        id="servings" 
        name="servings"
        value={servings} 
        onChange={(e) => setServings(e.target.value)}/>
      </fieldset>
      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;




// TRIED TO USE ANT DESIGN COMPONENTS BUT IT DIDN'T WORK

// import { Divider, Input, Button } from "antd";
// import React, { useState } from "react";

// function AddFoodForm(props) {
//   const { onAddFood } = props;

//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [calories, setCalories] = useState("0");
//   const [servings, setServings] = useState("0");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFood = { name, image, calories, servings };
//     onAddFood(newFood);
//     setName("");
//     setImage("");
//     setCalories("");
//     setServings("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Divider>Add Food Entry</Divider>

//         <label>Name</label>
//         <Input
//           name="name"
//           value={name}
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//         />

//         <label>Image</label>
//         <Input
//           name="image"
//           value={image}
//           type="text"
//           onChange={(e) => setImage(e.target.value)}
//         />


//         <label>Calories</label>
//         {
//           <Input
//             type="number"
//             id="calories"
//             name="calories"
//             value={calories}
//             onChange={(e) => setCalories(e.target.value)}
//           />
//         }


//         <label>Servings</label>
//         {
//           <Input
//             type="number"
//             id="servings"
//             name="servings"
//             value={servings}
//             onChange={(e) => setServings(e.target.value)}
//           />
//         }

//       <Button type="submit">Add Food</Button>
//     </form>
//   );
// }

// export default AddFoodForm;
