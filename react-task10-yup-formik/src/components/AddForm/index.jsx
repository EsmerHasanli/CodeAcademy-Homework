import React, { useState } from "react";
import { useFormik, Formik } from "formik";
import { postProduct } from "../../services/api/httpsrequests";
import { Button, Checkbox, FormControlLabel, Link, TextField, OutlinedInput, InputLabel, MenuItem, FormControl, Select, } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import style from "./index.module.css";
import addSchema from "../../validation/addValidation";
import toast, { Toaster } from 'react-hot-toast';

function getStyles(name, selectedCategory, theme) {
  return {
    fontWeight:
      selectedCategory.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddForm = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const categories = [
    { categoryId: "1", categoryName: "Beverages" },
    { categoryId: "2", categoryName: "Condiments" },
    { categoryId: "3", categoryName: "Confections" },
    { categoryId: "4", categoryName: "Dairy Products" },
    { categoryId: "5", categoryName: "Grains/Cereals" },
    { categoryId: "6", categoryName: "Meat/Poultry" },
    { categoryId: "7", categoryName: "Produce" },
    { categoryId: "8", categoryName: "Seafood" },
  ];

  const notify = () => toast.success('Successfully added!');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategory(
      // On autofill, we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const { handleSubmit, handleBlur, handleChange: formikHandleChange, values, errors, touched, } = useFormik({
    // devTools: true,
    initialValues: {
      categoryId: "",
      name: "",
      unitPrice: null,
      unitsInStock: null,
      discontinued: false,
      quantityPerUnit: "",
    },
    onSubmit: async (values, actions) => {  //onSubmit iwlemir
      console.log('test'); //console bowdu
      try {
        setIsSubmitting(true);
        await postProduct(values);
        actions.resetForm();
        notify();
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    validationSchema: addSchema,
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }} className={style.addform}>
        <h1 className={style.title}>Product Add Form</h1>
        <Link className={style.link} href="https://northwind.vercel.app/api/products"> API link to check </Link>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Category</InputLabel>
            <Select labelId="demo-multiple-name-label" id="demo-multiple-name" value={selectedCategory} onChange={handleChange} input={<OutlinedInput label="Category" />}>
              {categories.map((category) => (
                <MenuItem key={category.categoryId} value={category.categoryId} style={getStyles(category.categoryName, selectedCategory, theme)}>
                  {category.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={values.name} onChange={formikHandleChange} onBlur={handleBlur} />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <TextField id="outlined-basic" type="number" label="Unit Price" variant="outlined" name="unitPrice" value={values.unitPrice} onChange={formikHandleChange} onBlur={handleBlur} />
          {errors.unitPrice && touched.unitPrice && <div>{errors.unitPrice}</div>}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField style={{ marginTop: "24px" }} id="outlined-basic" type="number" label="Units in Stock" variant="outlined" name="unitsInStock" value={values.unitsInStock} onChange={formikHandleChange} onBlur={handleBlur} />
          {errors.unitsInStock && touched.unitsInStock && <div>{errors.unitsInStock}</div>}
          <FormControlLabel style={{ marginTop: "24px" }} required control={<Checkbox />} label="is Discounted" name="discontinued" checked={values.discontinued} onChange={formikHandleChange} onBlur={handleBlur} />
        </div>
        <div style={{ margin: "0 auto", width: "250px" }}>
          <TextField style={{ marginTop: "24px" }} id="outlined-basic" label="Quantity per Unit" variant="outlined" name="quantityPerUnit" value={values.quantityPerUnit} onChange={formikHandleChange} onBlur={handleBlur} />
        </div>
        <Button onClick={notify} style={{ margin: "24px auto" }} variant="contained" color="success" type="submit" disabled={isSubmitting}>
          ADD PRODUCT TO API
        </Button>
        <Toaster />
      </form>
    </div>
  );
};

export default AddForm;
