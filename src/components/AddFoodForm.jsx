import { useState } from "react";
import { Form, Divider, Input, Button } from "antd";

const AddFoodForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);
  const [calories, setCalories] = useState(0);

  return (
    <Form
      className="addFoodForm"
      onSubmit={(e) => handleSubmit(e, name, image, servings, calories)}
    >
      <Divider>Add food</Divider>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      <Input
        type="number"
        name="calories"
        placeholder="Calories"
        onChange={(e) => setCalories(e.target.value)}
      />
      <Input
        type="number"
        name="servings"
        placeholder="Servings"
        onChange={(e) => setServings(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddFoodForm;
