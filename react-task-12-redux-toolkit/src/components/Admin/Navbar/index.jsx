import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const AdminNavbar = () => {
  return (
    <AppBar sx={{ background: "black" }} position="static">
      <Container>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Side
          </Typography>
          <Button color="inherit">
            <Link style={{ color: "white" }} to={"/admin"}>
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to={"/admin/add-category"}>
              Add Category
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AdminNavbar;
