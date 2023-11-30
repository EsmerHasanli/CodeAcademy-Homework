import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) ? JSON.parse(localStorage.getItem("basket")) : []);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
