import React from 'react';
import { RouterProvider } from 'react-router/dom';
import { Navigate, createHashRouter, Outlet } from 'react-router';

// config
import { MenulevelConfig } from './modules/menulevel';
import { PUBLIC_ROUTE, ERROR_ROUTE, NO_MATCHED_ROUTE } from './sys';

export const Router: React.RC = () => {
  //
  const PROTECTED_ROUTE = {
    path: '/',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      // 默认的重定向
      { index: true, element: <Navigate to={'/menu_level/menu_level_1a'} replace /> },
      // 业务模块
      MenulevelConfig,
    ],
  };

  const routes = [
    PUBLIC_ROUTE, // 公共路由
    PROTECTED_ROUTE, // 受保护的路由(业务路由)
    ERROR_ROUTE, // 错误路由
    NO_MATCHED_ROUTE, // 上面都没有匹配到的路由，放最后
  ];
  const router = createHashRouter(routes);
  return <RouterProvider router={router} />;
};

export default Router;
