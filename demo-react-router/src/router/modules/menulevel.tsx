import { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router';

export const MenulevelConfig = {
  order: 2,
  path: 'menu_level',
  meta: {},
  element: (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'menu_level_1a',
      element: <div>lervel 1a</div>,
    },
    {
      path: 'menu_level_1b',
      children: [
        {
          index: true,
          element: <Navigate to='menu_level_2a' replace />,
        },
        {
          path: 'menu_level_2a',
          element: <div>lervel 2</div>,
        },
        {
          path: 'menu_level_2b',
          element: <div>lervel 2</div>,
        },
      ],
    },
  ],
};

export default MenulevelConfig;
