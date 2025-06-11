// components
import Home from '@/pages/home';
import About from '@/pages/about';

export const routesConfig = [
  {
    path: 'home',
    element: <Home />,
    meta: {
      label: '首页',
      key: '/home',
      icon: 'AppstoreOutlined',
    },
  },
  {
    path: 'about',
    element: <About />,
    meta: {
      label: '首页',
      key: '/about',
      icon: 'AppstoreOutlined',
    },
  },
];

export default routesConfig;
