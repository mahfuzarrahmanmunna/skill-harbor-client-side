import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AllCourse from "../Pages/Course/AllCourse/AllCourse";
import AddCourse from "../Pages/Course/AddCourse/AddCourse";
import PrivateRoutes from "../Private/PrivateRoutes";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

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
                element: <PrivateRoutes>
                    <AllCourse />
                </PrivateRoutes>,
            },
            {
                path: '/add-course',
                element: <PrivateRoutes>
                    <AddCourse />
                </PrivateRoutes>,
            },
            {
                path: '/sign-up',
                Component: SignUp
            },
            {
                path: '/sign-in',
                Component: SignIn
            }
        ]
    }
])