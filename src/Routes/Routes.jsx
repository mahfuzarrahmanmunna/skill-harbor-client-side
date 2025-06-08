import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AllCourse from "../Pages/Course/AllCourse/AllCourse";
import AddCourse from "../Pages/Course/AddCourse/AddCourse";
import PrivateRoutes from "../Private/PrivateRoutes";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Fallback from "../Components/Fallback/Fallback";
import CourseDetails from "../Pages/Course/CourseDetails/CourseDetails";

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
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/courses`),
                element: <PrivateRoutes>
                    <AllCourse />
                </PrivateRoutes>,
                hydrateFallbackElement: <Fallback />
            },
            {
                path: '/course-details/:id',
                Component: CourseDetails,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/single-course/${params.id}`),
                hydrateFallbackElement: <Fallback />
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