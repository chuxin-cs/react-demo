import { Outlet } from 'react-router';
import { Layout, Card } from 'antd';

// v1 v2
import MenuLayout from './v2';

const { Sider, Content } = Layout;
export default function Layouts() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={256} theme='dark'>
        <MenuLayout />
      </Sider>
      <Content>
        <Card>
          <Outlet />
        </Card>
      </Content>
    </Layout>
  );
}
