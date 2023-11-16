import React from 'react'
import { Button } from '@chakra-ui/react';

export const UserLogout = () => {

  const handleLogOut = () => {
    localStorage.removeItem('user');
  }

  return (
    <Button onClick={handleLogOut}>Logout</Button>
  )
}

export default UserLogout