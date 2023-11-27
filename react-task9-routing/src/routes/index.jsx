import AdminRout from "../pages/Admin/AdminRout";
import AdminDetailsPage from "../pages/Admin/Details";
import AdminTable from "../pages/Admin/Table";
import UserAboutPage from "../pages/User/About";
import UserHomePage from "../pages/User/Home";
import UserRout from "../pages/User/UserRoot";



export const ROUTES = [
    {
        path: '/',
        element: <UserRout/>,
        children: [
            {
                path: '',
                element: <UserHomePage/>
            },
            {
                path: 'about',
                element: <UserAboutPage/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRout/>,
        children: [
            {
                path: '',
                element: <AdminTable/>
            },
            {
                path: 'details',
                element: <AdminDetailsPage/>
            }
        ]
    }
]