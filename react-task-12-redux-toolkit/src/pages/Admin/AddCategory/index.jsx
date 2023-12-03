import {
  Button,
  Container,
  CssBaseline,
  createTheme,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../../../services/api/products";
import validationSchema from "../../../validation/addValidationSchema";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../services/context/UserContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Addproduct = () => {
  const navigate = useNavigate();
  const{user} = useContext(UserContext);
  useEffect(()=>{
    if (user===null) {
      navigate('/admin');
    }
  },[]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <div style={{ height: "100vh" }}>
          <Formik
            initialValues={{
              name: "", 
              description: "",
              price: 0,
              image: "https://source.unsplash.com/random?products",
              createdAt: Date.now(),
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) =>{
              await postProduct(values);
              navigate("/admin/dashboard");
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'60px'}}>
                <Field
                style={{marginBottom:'20px'}}
                  as={TextField}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Product Name"
                  label="Product Name"
                />

                <Field
                style={{marginBottom:'20px'}}
                  as={TextField}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Product Description"
                  label="Product Description"
                />

                <Field
                style={{marginBottom:'20px'}}
                  as={TextField}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Product Price"
                  label="Product Price"
                />

              <Button type="submit" variant="contained">
                Add Product
              </Button>
              </div>

            </Form>
          </Formik>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Addproduct;
