import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login/login.tsx";
import Matching from "./pages/matching/matching.tsx";
import ErrorPage from "./pages/error/error.tsx";
import Forum from "./pages/forum/forum.tsx";
import App from "./App.tsx"; // Import the App component

let router: ReturnType<typeof createBrowserRouter>; // Use ReturnType to get the correct type

try {
    router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />, // Render the App component
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "matching",
                    element: <Matching />,
                },
                {
                    path: "forum",
                    element: <Forum />,
                }
            ],
        }
    ]);

} catch (error) {
    console.error('Error initializing router:', error);
}

export { router };