import { createContext, useContext, useState } from 'react';

const MultiTabsContext = createContext({
  tabs: [],
  // 激活的tab路由路径
  activeTabRoutePath: '',
  // 设置标签页列表的方法
  setTabs: () => {},
  // 关闭指定标签页的方法
  closeTab: () => {},
  // 关闭其他标签页的方法
  closeOthersTab: () => {},
  // 关闭所有标签页的方法
  closeAll: () => {},
  // 关闭当前标签页左侧所有标签页的方法
  closeLeft: () => {},
  // 关闭当前标签页右侧所有标签页的方法
  closeRight: () => {},
  // 刷新指定标签页的方法
  refreshTab: () => {},
});

export default function MultiTabsProvider({ children }) {
  // 设置标签页列表的方法
  const [tabs, setTabs] = useState([]);
  return <MultiTabsContext.Provider value={{}}>{children}</MultiTabsContext.Provider>;
}
