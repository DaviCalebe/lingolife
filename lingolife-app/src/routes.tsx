import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.tsx';
import Login from './pages/login/login.tsx';
import Register from './pages/register/register.tsx';
import Ranking from './pages/ranking/ranking.tsx';
import Matching from './pages/matching/matching.tsx';
import ErrorPage from './pages/error/error.tsx';
import Forum from './pages/forum/forum.tsx';
import App from './App.tsx';
import { MyProfile } from './pages/my-profile/my-profile.tsx';
import { Profiles } from './pages/profiles/perfiles.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'ranking',
        element: <Ranking />,
      },
      {
        path: 'matching',
        element: <Matching />,
      },
      {
        path: 'forum',
        element: <Forum />,
      },
      {
        path: 'my-profile',
        element: <MyProfile />,
      },
      {
        // Ajuste a rota para usar '/profile/:id' ao invés de '/my-profile/:id'
        path: 'profile/:id',
        element: <Profiles />,
      },
    ],
  },
]);

export { router };
