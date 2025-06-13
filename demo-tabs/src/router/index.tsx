import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import About from '../pages/about';
import Demo from '../pages/demo';
import Login from '../pages/login';
import Home from '../pages/home';

export default function Router() {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/demo',
      element: <Demo />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
