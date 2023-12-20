import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import News from "../pages/User/News";
import CreateNews from "../pages/User/CreateNews";
import UserRoot from "../pages/User/UserRoot";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <News />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "createnews",
        element: <CreateNews />,
      },
      // {
      //   path:'users/:id',
      //   element:<UserProfile/>
      // },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <AdminRoot />,
  //   children: [
  //       {
  //           index: true,
  //           element: <AdminLogin/>
  //       },
  //       {
  //         path: 'users',
  //         element: <UsersPage/>
  //     }
  //   ]
  // },
];
