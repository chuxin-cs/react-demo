// components
import Login from '@/pages/login';

export const publicConfig = [
  {
    order: 2,
    path: 'public',
    meta: {
      label: '公开路由',
      key: '/public',
      icon: 'AppstoreOutlined',
    },
    children: [
      {
        path: 'login',
        element: <Login />,
        meta: {
          label: '首页',
          key: '/public/login',
          icon: 'AppstoreOutlined',
        },
      }
    ],
  },
];

export default publicConfig;
