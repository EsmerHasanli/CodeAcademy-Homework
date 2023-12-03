import Home from "../pages/User/Home";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Basket from "../pages/User/Basket";
import Dashboard from "../pages/Admin/Dashboard";
import UserRoot from "../pages/User/UserRoot";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminLogin from "../pages/Admin/Login";
import Products from "../pages/User/Products";
import DetailsPage from "../pages/User/Details"
import UserPage from "../pages/User/userPage";
import Addproduct from "../pages/Admin/AddCategory";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":id",
            element: <DetailsPage />,
          },
        ],
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
        {
            index: true,
            element: <AdminLogin/>
        },
        {
            path: 'add-product',
            element: <Addproduct/>
        },
        {
            path: 'dashboard',
            element: <Dashboard/>
        }
    ]
  },
];
