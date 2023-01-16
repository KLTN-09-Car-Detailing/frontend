import React , {Suspense}from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HomePage from '../page/homePage/homePage';
import Loading from '../component/loading';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Service from '../page/service/service';

const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<h1>helllo</h1>} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/service" element={<Service />} />
              <Route
                path="*"
                element={
                  <div>
                    <center>
                      <br />
                      <h3>Lỗi 404</h3>
                      <br />
                      <h5>Bạn đang truy cập vào đường dẫn không tồn tại</h5>
                      <br />
                      <Link to="/">
                        <Button>Quay lại trang chủ</Button>
                      </Link>
                    </center>
                  </div>
                }
              />
            </Routes>
          </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Car caring store</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;