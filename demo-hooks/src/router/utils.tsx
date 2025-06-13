export function getRoutesFromModules() {
  const menuModules = [];
  const modules = import.meta.glob('../pages/**/index.tsx', { eager: true });
  for (const key in modules) {
    const mod = (modules as any)[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    menuModules.push(...modList);
  }
  return menuModules;
}

