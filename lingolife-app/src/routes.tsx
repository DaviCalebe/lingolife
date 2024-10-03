import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login/login.tsx";
import ErrorPage from "./pages/error/error.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
]);

export  { router };