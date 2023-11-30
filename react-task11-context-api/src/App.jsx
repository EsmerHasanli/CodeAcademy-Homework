import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Basket from "./pages/Basket";
import BasketContextProvider from "./services/context/basketContext";

function App() {
  return (
    <>
      <BasketContextProvider>
        <Navbar />
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BasketContextProvider>
    </>
  );
}

export default App;
