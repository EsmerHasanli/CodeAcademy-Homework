import React, {useState} from 'react'
import UserLogin from './UserLogin.jsx'
import UserRegister from './UserRegister.jsx'
import ProductsTable from './ProductsTable.jsx'
import UserLogout from './Logout.jsx'
import PropTypes from 'prop-types';


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

UserLogin.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  loggedInUser: PropTypes.object,
  setLoggedInUser: PropTypes.func,
  loggedOutUser: PropTypes.object,
  setLoggedOutUser: PropTypes.func,
};

UserRegister.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
};

UserLogout.propTypes = {
  loggedOutUser: PropTypes.object,
  setLoggedOutUser: PropTypes.func,
};

ProductsTable.propTypes = {
  loggedInUser: PropTypes.object,
};

export default ProductsPage