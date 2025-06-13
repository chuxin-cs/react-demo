import { Layout } from 'antd';
import { Outlet } from 'react-router';

const { Content, Sider } = Layout;
export default function Layouts() {
  return (
    <Layout>
      <Sider>
        <button>home</button>
        <button>about</button>
        <button>login</button>
        <button>demo</button>
      </Sider>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}
