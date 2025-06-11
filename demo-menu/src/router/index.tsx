import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter, Navigate } from 'react-router';
// components
import Layouts from '@/layouts';
// config
import { publicConfig } from './routes/public';
import { dashboardConfig } from './routes/dashboard';

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Layouts></Layouts>,
      children: [
        { index: true, element: <Navigate to='dashboard/home' replace /> },
        ...dashboardConfig,
      ],
    },
  ];
  const router = createBrowserRouter([
    ...routes,
    ...publicConfig,
    {
      path: '*',
      element: <Navigate to='/login' replace />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
