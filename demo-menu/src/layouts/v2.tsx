import { useNavigate } from 'react-router';
import { Menu, type MenuProps } from 'antd';
import React, { useMemo } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import {
  getRoutesFromModules,
  menuFilter,
  useRouteToMenuFn,
} from '@/router/utils';

export const MenuLayout: React.RC = () => {
  const routes = getRoutesFromModules();
  const routeToMenuFn = useRouteToMenuFn();
  const menuList = useMemo(() => {
    const menuRoutes = menuFilter(routes);
    return routeToMenuFn(menuRoutes);
  }, [routeToMenuFn]);
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      mode='inline'
      items={menuList}
    />
  );
};

export default MenuLayout;
