import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/"
import Main from './components/User/NewsPage/Main.tsx';

const routes = createBrowserRouter(ROUTES);

function App() {
  

  return (
    <>
      <RouterProvider router={routes}/>
      {/* <Main.tsx/> */}
    </>
  )
}

export default App
