import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../services/context/UserContext";
import { Container, Card, CardHeader, Avatar } from "@mui/material";
import { getAllUsers } from "../../../services/api/users";

const UserPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    async function findUser() {
      if (user) {
        let currentUser = JSON.parse(localStorage.getItem("user"));
        let allUsers = await getAllUsers();
        setUser(allUsers);
        user.find((obj) => {
          obj.email === currentUser.email;
          setUser(obj);
        });
      }
    }
    findUser();
  }, []);

  return (
    <Container>
      <Card sx={{ marginTop: 10, maxWidth: "400px" }}>
        <CardHeader
          avatar={
            
              user.avatar

          }
          title={`Email: ${user.email}`}
          subheader={`Password: ${user.password}`}
        />
      </Card>
    </Container>
  );
};

export default UserPage;
