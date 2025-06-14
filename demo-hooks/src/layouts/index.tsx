import { Layout } from 'antd';
import { Outlet } from 'react-router';
import Menu from './Menu';

const { Sider, Content } = Layout;
export default function Layouts() {
  return (
    <Layout>
      <Sider width={256} theme='dark'>
        <Menu />
      </Sider>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}
