import { Layout } from 'antd';
import { Outlet } from 'react-router';

const { Sider, Content } = Layout;
export default function Layouts() {
  return (
    <Layout>
      <Sider>
        
      </Sider>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}
