import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter, Navigate } from 'react-router';
// components
import Layouts from '@/layouts';
import Login from '@/pages/login';
// config
import { routesConfig } from './routes';

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Layouts></Layouts>,
      children: [
        { index: true, element: <Navigate to='dashboard/home' replace /> },
        ...routesConfig,
      ],
    },
  ];
  const router = createBrowserRouter([
    ...routes,
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to='/login' replace />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
