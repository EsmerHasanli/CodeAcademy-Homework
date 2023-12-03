import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    productPrice: Yup.number().required("Product price is required").positive("Product price must be a positive number"),
    productDesciption: Yup.string().required("Product description is required")
  });

export default validationSchema;
