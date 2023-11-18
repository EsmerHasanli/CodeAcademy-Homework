import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Snackbar, TextField } from "@mui/material";
import { getAllUsers } from "../api/usersrequests.js";

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

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailValue.length == 0 || passwordValue.length == 0) {
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 2000);
    } 
    else {
        const users = await getAllUsers();
        const user = users.find((user)=> user.email.toLowerCase().trim() == emailValue.toLowerCase().trim() && user.password.toLowerCase().trim() == passwordValue.toLowerCase().trim())
        if(!user) {
            alert('User with this email or password was not defined')
        }
        else{
            localStorage.setItem('user', JSON.stringify({id: user.id, email: user.email, isAdmin: user.isAdmin}))
            setOpen(false)
            location.reload()
        }
    }
  };

  const [openSnacbar, setOpenSnackbar] = React.useState(false);

  const handleClickSnacbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnacbar = (event) => {
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
        LOGIN
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
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              style={{ marginBottom: "5px" }}
              type="email"
              id="email"
              label="email"
              variant="outlined"
              autocomplete="on"
            />
            <TextField
              onChange={(e) => setPasswordValue(e.target.value)}
              value={passwordValue}
              style={{ marginBottom: "10px" }}
              type="password"
              id="password"
              label="password"
              variant="outlined"
              autocomplete="on"
            />
            <Button
              style={{ marginBottom: "10px" }}
              type="submit"
              variant="contained"
            >
              Login
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
        message="Inputs can not be empty!"
        action={action}
      />
    </>
  );
}
