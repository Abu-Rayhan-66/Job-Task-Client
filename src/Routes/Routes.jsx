import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import YourTeam from "../Pages/YourTeam/YourTeam";
import Project from "../Pages/Project/Project";
import PrivateRoute from "./PrivateRoutes";
import Benefits from "../Pages/Home/Benefits/Benefits";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
               path:"/",
               element:<Home></Home> 
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/yourTeam",
                element:<PrivateRoute><YourTeam></YourTeam></PrivateRoute>
            },
            {
                path:"/project",
                element:<PrivateRoute><Project></Project></PrivateRoute>
            },
            {
                path:"/benefits",
                element:<Benefits></Benefits>
            }
        ]
    },

    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
             path:"/dashboard/createTask",
             element:<CreateTask></CreateTask>
            }
        ]
    }
])

export default router;