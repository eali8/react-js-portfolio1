import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Admin from "../Admin";
import Categories from "../components/Admin/Categories/Categories";
import Landing from "../components/Landing/Landing";
import MyProject from "../components/Admin/MyProject/MyProject";
import MyProfile from "../components/Admin/MyProfile/MyProfile";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Uploads from "../components/Admin/Uploads/Uploads";
import Settings from "../components/Admin/Settings/Settings";
import Login from "../components/Auth/Login";
import PrivateRoutes from "./PrivateRoutes";
import { baseUrl } from "../Helper/helper";
import Projects from "../components/Projects/Projects";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: '/projects',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/project/:name',
                element: <Projects />
            }
        ]
    },
    {
        path: '/admin',
        element: <PrivateRoutes><Admin /></PrivateRoutes>,
        children: [
            {
                path: '/admin',
                element: <Dashboard />
            },
            {
                path: '/admin/profile',
                element: <MyProfile />,
                loader: async () => {
                    return fetch(`${baseUrl}/myProfile`)
                }
            },
            {
                path: '/admin/projects',
                element: <MyProject />
            },
            {
                path: '/admin/categories',
                element: <Categories />
            },
            {
                path: '/admin/uploads',
                element: <Uploads />
            },
            {
                path: '/admin/settings',
                element: <Settings />
            }
        ]
    },
    {
        path: '/admin/login',
        element: <Login />
    }
])

