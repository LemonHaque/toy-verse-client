import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AddaToy from "../Pages/AddaToy/AddaToy";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/MyToys/UpdateToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddaToy></AddaToy></PrivateRoute>,
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/alltoys',
                element: <PrivateRoute><AllToys></AllToys></PrivateRoute>,
                loader: () => fetch('https://toy-verse-server-delta.vercel.app/toy')
            },
            {
                path: '/updatetoys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({ params }) => fetch(`https://toy-verse-server-delta.vercel.app/toy/${params.id}`)
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute> <ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-verse-server-delta.vercel.app/singleCar/${params.id}`)
            }
        ]
    },
]);

export default router;