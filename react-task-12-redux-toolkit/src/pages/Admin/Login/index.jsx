import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Formik } from "formik";
import { getAllUsers } from "../../../services/api/users"
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AdminLogin = () => {
  const [ users, setUsers ] = useState()

  useEffect(()=>{
    async function fetchData(){
      let fetchedUsers = await getAllUsers()
      setUsers(fetchedUsers)
    }
  },[])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <section
        style={{
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(33, 33, 33, 0.47)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(33, 33, 33, 0.24)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "500px",
          }}
        >
          <Formik
            initialValues={{ email: values.email,
              }}
            onSubmit={(values, actions) => {
              alert(values.email)


            }}
          >
            {(props) => (
              <form
                style={{
                  padding: "30px 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                onSubmit={props.handleSubmit}
              >
                <input
                  placeholder="email"
                  style={{ marginBottom: "10px", padding: "10px 30px" }}
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  name="email"
                />
                <input
                  placeholder="password"
                  style={{ marginBottom: "10px", padding: "10px 30px" }}
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  name="password"
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default AdminLogin;
