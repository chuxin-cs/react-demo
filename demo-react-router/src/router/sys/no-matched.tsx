import { Navigate } from 'react-router';

export const NO_MATCHED_ROUTE = {
  path: '*',
  element: <Navigate to='/404' replace />,
};
