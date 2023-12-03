import * as Yup from "yup";

const addSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    name: Yup.string().required("Name is required"),
    unitPrice: Yup.number().required("Unit Price is required"),
    unitsInStock: Yup.number().required("Units in Stock is required"),
    discontinued: Yup.boolean().optional(),
    quantityPerUnit: Yup.string(),
  });

  export default addSchema