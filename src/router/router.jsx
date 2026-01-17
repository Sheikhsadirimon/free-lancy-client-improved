import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "../provider/PrivateRoute";
import AcceptedTask from "../pages/AcceptedTask";
import AddJob from "../pages/AddJob";
import AllJobs from "../pages/allJobs/AllJobs";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../pages/JobDetails";
import MyJobs from "../pages/MyJobs";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import AcceptedTasks from "../pages/AcceptedTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      },
      {
        path: "/all-jobs",
        element:<AllJobs></AllJobs>
      },
      {
        path: "/about-us",
        element:<AboutUs></AboutUs>
      },
      {
        path: "/contact-us",
        element:<ContactUs></ContactUs>
      },
      {
        path:'/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        errorElement:<ErrorPage></ErrorPage>
      },
      {
        path: "/add-job",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/my-accepted-tasks",
        element: <PrivateRoute><AcceptedTask></AcceptedTask></PrivateRoute>
      },
      {
        path:"/my-Added-Jobs",
        element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/signup",
            element: <Register></Register>,
          },
        ],
      },
    ],
    
  },
  {path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        index:true,
        element:<DashboardHome></DashboardHome>
      },
      {
        path: "/dashboard/my-accepted-tasks",
        element: <AcceptedTasks></AcceptedTasks>
      },
    ]
  }
]);

export default router;
