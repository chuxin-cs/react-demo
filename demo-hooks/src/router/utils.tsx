import { useCallback } from 'react';

export const menuFilter = (list) => {
  return list.filter((item) => {
    const key = item.meta?.key;
    if ((key && item.children) || item.children?.length) {
      item.children = menuFilter(item.children);
    }
    return key;
  });
};

/**
 * 基于 src/router/routes.tsx 文件结构动态生成路由
 */
export function getRoutesFromModules() {
  const menuModules = [];
  const modules = import.meta.glob('./routes/**/*.tsx', { eager: true });
  for (const key in modules) {
    const mod = (modules as any)[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    menuModules.push(...modList);
  }
  return menuModules;
}
import * as Icons from '@ant-design/icons';
const getIcon = (iconName) => {
  const Icon = Icons[iconName];
  return <Icon />;
};
export function useRouteToMenuFn() {
  const routeToMenuFn = useCallback((items) => {
    return items.map((item) => {
      const { meta, children } = item;
      // 如果没有meta，直接返回空对象
      if (!meta) return {};
      const menuItem = {
        key: meta.key, // antd menu 需要的 key
        disabled: meta.disabled,
        label: meta.label, // antd menu 需要的 label
        icon: getIcon(meta.icon),
        ...(children && { children: routeToMenuFn(children) }),
      };
      return menuItem;
    });
  }, []);
  return routeToMenuFn;
}
