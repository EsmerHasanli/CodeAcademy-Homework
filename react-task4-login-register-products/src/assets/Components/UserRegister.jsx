import React, { useState } from "react";
import { Button, Input } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import { postUser } from '../script/usersrequest.js'
import PropTypes from 'prop-types';

export const UserRegister = ({ users, setUsers, loggedInUser }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleOpenRegisterForm = () => {
    setShowRegisterForm(true);
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: e.target[0].value, 
      email: e.target[1].value,
      password: e.target[2].value,
      isAdmin: isAdmin
    };

    postUser(newUser)
    setUsers([...users, newUser]);

    console.log(users);

    setShowRegisterForm(false);
  }

  const handleCancelRegister= () => {
    setShowRegisterForm(false);
  }

  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin)
  }

  return (
     <>
      <Button onClick={handleOpenRegisterForm} style={{ margin: '10px' }}>Register</Button>
      { 
        showRegisterForm &&       
        <form onSubmit={handleSubmitRegister}>
          <Input placeholder='your name' />
          <Input placeholder='your email' />
          <Input placeholder='your password' />
          <Checkbox isChecked={isAdmin} onChange={handleCheckboxChange}>Admin</Checkbox>
          <Button type="submit">Submit</Button>
          <Button onClick={handleCancelRegister}>Cancel</Button>
        </form>
      }
    </>
  )
}


UserRegister.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  loggedInUser: PropTypes.array,
  setLoggedInUser: PropTypes.func,
};


export default UserRegister
