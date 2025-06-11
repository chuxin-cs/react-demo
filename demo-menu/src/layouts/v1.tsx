import React from 'react';
import {useNavigate} from "react-router"

import { Menu, type MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    label: 'V1版本',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'home', label: 'home' },
      { key: 'about', label: 'about' },
    ],
  },
  {
    key: '2',
    label: '公开路由',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'login', label: 'login' },
    ],
  },
];

export const MenuLayout: React.RC = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e);
    navigate(e.key)
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      mode='inline'
      items={items}
    />
  );
};

export default MenuLayout;
