import React, { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Menu, type MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { routesConfig } from '@/router/routes';

export const MenuLayout: React.RC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      mode='inline'
      items={routesConfig}
    />
  );
};

export default MenuLayout;
