import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login/login.tsx";
import Matching from "./pages/matching/matching.tsx";
import ErrorPage from "./pages/error/error.tsx";
import Forum from "./pages/forum/forum.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "matching",
        element: <Matching />,
        errorElement: <ErrorPage />,
    },
    {
        path: "forum",
        element: <Forum />,
        errorElement: <ErrorPage />,
    }
]);

export  { router };