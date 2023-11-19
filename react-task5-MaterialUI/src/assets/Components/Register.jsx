import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Checkbox, IconButton, Snackbar, TextField } from "@mui/material";
import { getAllUsers } from "../api/usersrequests.js";
import { postUser } from "../api/usersrequests.js";
import { Label } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [usernameValue, setUsernameValue] = React.useState("");
  const [openSnacbar, setOpenSnackbar] = React.useState(false);
  const[isAdmin, setIsAdmin] = React.useState(false)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex for username: at least 3 characters
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;

    // Regex for password: minimum 5 characters, at least one number, and one uppercase letter
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z]).{5,}$/;

    if (!usernameRegex.test(usernameValue) || !passwordRegex.test(passwordValue)) {
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 2000);
    } else {
      const users = await getAllUsers();
      const user = users.find(
        (user) =>
          user.email.toLowerCase().trim() === emailValue.toLowerCase().trim() &&
          user.password.toLowerCase().trim() === passwordValue.toLowerCase().trim()
      );

      if (user) {
        alert("User with this email already exists");
      } else {
        const newUser = {
          email: emailValue,
          password: passwordValue,
          username: usernameValue,
          createdAt: Date.now(),
          isAdmin: isAdmin,
          wishlistItems: []
        };
        await postUser(newUser);
        setOpen(false);
        location.reload();
      }
    }
  };

  const handleClickSnacbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnacbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClickSnacbar}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnacbar}
      ></IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Button style={{ color: "white" }} onClick={handleOpen}>
        REGISTER
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              onChange={(e) => setUsernameValue(e.target.value)}
              value={usernameValue}
              style={{ marginBottom: "5px" }}
              type="text"
              id="username"
              label="Username"
              variant="outlined"
              autoComplete="on"
            />
            <TextField
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              style={{ marginBottom: "5px" }}
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              autoComplete="on"
            />
            <TextField
              onChange={(e) => setPasswordValue(e.target.value)}
              value={passwordValue}
              style={{ marginBottom: "10px" }}
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              autoComplete="on"
            />

            <div>
                <label for="admin">isAdmin</label>
                <Checkbox onChange={()=>{
                    setIsAdmin(!isAdmin);
                }} value={isAdmin} id="admin" />
            </div>

            <Button
              style={{ marginBottom: "10px" }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <Button onClick={handleClose} type="reset" variant="outlined">
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>

      <Snackbar
        open={openSnacbar}
        autoHideDuration={6000}
        onClose={handleCloseSnacbar}
        message="Invalid username or password format!"
        action={action}
      />
    </>
  );
}
