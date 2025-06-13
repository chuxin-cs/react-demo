import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router/dom';
import routes from './routes';

export default function Router() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
