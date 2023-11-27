import React from 'react'

import AdminNavbar from '../../../Components/Admin/Navbar'
import AdminFooter from '../../../Components/Admin/Footer'

import { Outlet } from 'react-router-dom'

const AdminRout = () => {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
    </>
  )
}

export default AdminRout