import { Navigate } from 'react-router';

// components
import Home from '@/pages/home';
import About from '@/pages/about';
import Login from '@/pages/login';
import Layouts from '@/layouts';

export const routes = [
  {
    path: '/',
    element: <Layouts></Layouts>,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to='/login' replace />,
  },
];
