import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login/login.tsx";
import ErrorPage from "./pages/error/error.tsx";

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
    }
]);

export  { router };