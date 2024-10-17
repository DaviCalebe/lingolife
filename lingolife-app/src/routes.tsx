import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login/login.tsx";
import Matching from "./pages/matching/matching.tsx";
import ErrorPage from "./pages/error/error.tsx";
import Forum from "./pages/forum/forum.tsx";
import App from "./App.tsx"; // Import the App component


console.log('teste')
let router: any; // Declare the router variable outside the try block

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

    console.log('Router initialized with routes:', router);
} catch (error) {
    console.error('Error initializing router:', error);
}

export { router };