import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../services/context/UserContext";

const Basket = () => {
  const navigate = useNavigate();
  const{user} = useContext(UserContext);
  useEffect(()=>{
    if (user===null) {
      navigate('/login');
    }
  },[]);
  return (
    <div>Basket</div>
  )
}

export default Basket