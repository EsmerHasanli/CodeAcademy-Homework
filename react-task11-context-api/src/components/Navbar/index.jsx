import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../../pages/Basket";
import Categories from "../../pages/Categories";
import { BasketContext } from "../../services/context/basketContext";

const Navbar = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("basket"))) {
      const currentbasket = JSON.parse(localStorage.getItem("basket"));
      setCount(currentbasket.length);
    } else {
      setCount(0);
    }
  }, [basket]);

  return (
    <div style={{ padding: "30px 0", backgroundColor: "lightskyblue" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li
          style={{
            listStyle: "none",
            margin: "0 10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          <Link
            style={{ color: "darkblue", textDecoration: "none" }}
            to="/categories"
            element={<Categories />}
          >
            Categories
          </Link>
        </li>
        <li
          style={{
            listStyle: "none",
            margin: "0 10px",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <Link
            style={{ color: "darkblue", textDecoration: "none" }}
            to="/basket"
            element={<Basket />}
          >
            Basket
          </Link>
          <sup
            style={{
              marginLeft: "4px",
              color: "darkblue",
              textDecoration: "none",
            }}
          >
            {count}
          </sup>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
