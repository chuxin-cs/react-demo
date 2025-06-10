import { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router';

function LevelPage({ children }){
  return <div>{ abc }{ children }</div>
}

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
      element: <LevelPage>lervel 1a</LevelPage>,
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
          element: <LevelPage>lervel 2</LevelPage>,
        },
        {
          path: 'menu_level_2b',
          element: <LevelPage>lervel 2</LevelPage>,
        },
      ],
    },
  ],
};

export default MenulevelConfig;
