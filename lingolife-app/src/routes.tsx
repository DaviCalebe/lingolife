import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login/login.tsx";
import Register from "./pages/register/register.tsx";
import Ranking from "./pages/ranking/ranking.tsx";
import Matching from "./pages/matching/matching.tsx";
import ErrorPage from "./pages/error/error.tsx";
import Forum from "./pages/forum/forum.tsx";
import App from "./App.tsx"; // Import the App component
import { MyProfile } from "./pages/my-profile/my-profile.tsx";
import { Profiles } from "./pages/profiles/perfiles.tsx";


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
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "ranking",
                    element: <Ranking />,
                },
                {
                    path: "matching",
                    element: <Matching />,
                },
                {
                    path: "forum",
                    element: <Forum />,
                },
                {
                    path: "my-profile",
                    element: <MyProfile/> ,
                    
                },
                {
                    path: "profiles",
                    element: <Profiles/> ,
                    
                }

            ],
        }
    ]);

} catch (error) {
    console.error('Error initializing router:', error);
}

export { router };