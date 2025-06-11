// components
import Home from '@/pages/home';
import About from '@/pages/about';

export const dashboardConfig = [
  {
    order: 1,
    path: 'dashboard',
    meta: {
      label: 'V2 版本',
      key: '/dashboard',
      icon: 'AppstoreOutlined',
    },
    children: [
      {
        path: 'home',
        element: <Home />,
        meta: {
          label: '首页',
          key: '/dashboard/home',
          icon: 'AppstoreOutlined',
        },
      },
      {
        path: 'about',
        element: <About />,
        meta: {
          label: '关于',
          key: '/dashboard/about',
          icon: 'AppstoreOutlined',
        },
      },
    ],
  },
];

export default dashboardConfig;
