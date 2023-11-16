import React, {useState} from 'react'
import UserLogin from './UserLogin.jsx'
import UserRegister from './UserRegister.jsx'
import ProductsTable from './ProductsTable.jsx'
import UserLogout from './Logout.jsx'


export const ProductsPage = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedOutUser, setLoggedOutUser] = useState(null);

  return (
    <>
        <UserLogin users={users} setUsers={setUsers} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} loggedOutUser={loggedOutUser} setLoggedOutUser={setLoggedOutUser}/>
        <UserRegister  users={users} setUsers={setUsers} />
        <UserLogout loggedOutUser={loggedOutUser} setLoggedOutUser={setLoggedOutUser} />
        <ProductsTable loggedInUser={loggedInUser}/>
        
    </>
  )
}

export default ProductsPage