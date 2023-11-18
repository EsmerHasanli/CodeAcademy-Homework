import React, { useEffect, useState } from "react";
import { Button, Input } from '@chakra-ui/react';
import { getAllUsers } from '../script/usersrequest.js';
import PropTypes from 'prop-types';

const UserLogin = ({ users, setUsers, loggedInUser, setLoggedInUser, loggedOutUser, setLoggedOutUser }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    };

    fetchData();
  }, [setUsers]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, [setLoggedInUser]);

  const handleOpenLoginForm = () => {
    setShowLoginForm(true);
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const enteredEmail = e.target[0].value;
    const enteredPassword = e.target[1].value;

    const userFound = users.find((user) => user.email === enteredEmail && user.password === enteredPassword);

    if (userFound) {
      setLoggedInUserAndStorage(userFound);
    } else {
      alert('Please make sure your email and password are correct. If you do not have an account, please register!');
    }

    setShowLoginForm(false);
  }

  const setLoggedInUserAndStorage = (user) => {
    setLoggedInUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleCancelLogin = () => {
    setShowLoginForm(false);
  }

  return (
    <>
      <Button onClick={handleOpenLoginForm} style={{ margin: '10px' }}>Login</Button>
      { 
        showLoginForm &&       
        <form onSubmit={handleSubmitLogin} style={{ margin: '10px' }}>
          <Input placeholder='your email' />
          <Input type='password' placeholder='your password' />
          <Button type="submit">Submit</Button>
          <Button onClick={handleCancelLogin}>Cancel</Button>
        </form>
      }
      {/* {loggedInUser && <h3>Welcome {loggedInUser.name}!</h3>} */}
    </>
  )
}

UserLogin.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  setLoggedInUser: PropTypes.func,
  loggedOutUser: PropTypes.object,
  setLoggedOutUser: PropTypes.func,
};

export default UserLogin;
