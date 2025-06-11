export const menuFilter = (list) => {
  return list.filter((item) => {
    const key = item.meta?.key;
    if ((key && item.children) || item.children?.length) {
      item.children = menuFilter(item.children);
    }
    console.log(key,"111")
    return 123;
  });
};

/**
 * 基于 src/router/routes.tsx 文件结构动态生成路由
 */
export function getRoutesFromModules() {
  const menuModules = [];
  const modules = import.meta.glob('./routes.tsx', { eager: true });
  for (const key in modules) {
    const mod = (modules as any)[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    menuModules.push(...modList);
  }
  return menuModules;
}
