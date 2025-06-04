import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import AllCourse from "../Pages/Course/AllCourse/AllCourse";
import AddCourse from "../Pages/Course/AddCourse/AddCourse";
import PrivateRoutes from "../Private/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/all-course',
                Component: AllCourse,
            },
            {
                path: '/add-course',
                element: <PrivateRoutes>
                    <AddCourse />
                </PrivateRoutes>,
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])