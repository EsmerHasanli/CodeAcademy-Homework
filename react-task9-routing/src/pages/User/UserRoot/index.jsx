import React from 'react'
import UserNavbar from '../../../Components/User/Navbar'
import UserFooter from '../../../Components/User/Footer'
import { Outlet } from 'react-router-dom'

const UserRout = () => {
  return (
    <>
        <UserNavbar/>
        <Outlet/>
        <UserFooter/>
    </>

  )
}

export default UserRout