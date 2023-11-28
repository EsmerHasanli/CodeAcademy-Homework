import * as Yup from "yup";

// Minimum five characters, at least one letter and one number:
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

const addSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    name: Yup.string().required("Name is required"),
    unitPrice: Yup.number().required("Unit Price is required"),
    unitsInStock: Yup.number().required("Units in Stock is required"),
    discontinued: Yup.boolean(),
    quantityPerUnit: Yup.string(),
  });

  export default addSchema