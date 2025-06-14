import UseTitlePage from '@/pages/useTitle';
import UseMountPage from '@/pages/useMount';

export const routesConfig = [
  {
    ...getKeyAndLabel('/useTitle'),
    element: <UseTitlePage />,
  },
  {
    ...getKeyAndLabel('/useMount'),
    element: <UseMountPage />,
  },
];

function getKeyAndLabel(value) {
  return {
    path: value,
    key: value,
    label: value,
  };
}
