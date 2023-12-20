import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/"
import "@fontsource/roboto-condensed"; // Defaults to weight 400
import "@fontsource/roboto-condensed/400.css"; // Specify weight
import "@fontsource/roboto-condensed/400-italic.css"; // Specify weight and style

const routes = createBrowserRouter(ROUTES);

function App() {
  

  return (
    <>
      <RouterProvider router={routes}/>
      
    </>
  )
}

export default App
