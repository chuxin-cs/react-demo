import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';

// config
import { routes } from './routes';

const Router = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default Router;
