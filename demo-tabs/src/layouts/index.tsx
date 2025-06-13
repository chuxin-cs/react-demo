import { Layout } from 'antd';
import { Outlet, NavLink } from 'react-router';
import MultiTabs from './tabs';

const { Content, Sider } = Layout;
export default function Layouts() {
  return (
    <Layout>
      <Sider>
        <button>
          <NavLink to='/home'>home</NavLink>
        </button>
        <button>
          <NavLink to='/about'>about</NavLink>
        </button>
        <button>
          <NavLink to='/login'>login</NavLink>
        </button>
        <button>
          <NavLink to='/demo'>demo</NavLink>
        </button>
      </Sider>
      <Content>
        {/* tabs */}
        <MultiTabs />
        {/* 主体内容 */}
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}
