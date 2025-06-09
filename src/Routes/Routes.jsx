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
import ErrorPage from "../Error/ErrorPage";
import ManageCourse from "../Pages/Course/ManageCourse/ManageCourse";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        errorElement: <ErrorPage />,
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
                path: '/manage-course',
                element: <PrivateRoutes>
                    <ManageCourse />
                </PrivateRoutes>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/course?email=${email}`)
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