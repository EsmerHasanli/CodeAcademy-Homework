import { useState } from "react";
import { postCategory } from "../../services/api/requests/categoryRequests";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  let [newCategory, setNewCategory] = useState({ name: "", description: "" });
  let navigate = useNavigate();

  return (
<h1>add new</h1>
  );
};

export default AddCategory;