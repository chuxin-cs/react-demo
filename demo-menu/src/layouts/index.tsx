import { Outlet } from 'react-router';

export const Layouts = () => {
  return (
    <div>
      {/* 左侧菜单栏 */}
      <div></div>
      {/* 右侧主体内容 */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
