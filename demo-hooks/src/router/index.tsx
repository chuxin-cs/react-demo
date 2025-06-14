import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import Layouts from '../layouts';
import { routesConfig } from './routes';

export default function Router() {
  const routes = [
    {
      path: '/',
      element: <Layouts />,
      children: [...routesConfig],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
