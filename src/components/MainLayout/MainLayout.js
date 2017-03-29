import React from 'react';
import styles from './MainLayout.css';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
function MainLayout({ children, location }) {
  return (
    <Layout>
      <Header className={styles.header}>
        <span className={styles.headerName}> 管理员 </span>
        <Dropdown overlay={menu} trigger={['click']}>
          <span className={styles.headerSet}>设置<Icon type="down" /></span>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="/sharer">
              <Link to="/sharer"><Icon type="user" />讲师管理</Link>
            </Menu.Item>
            <Menu.Item key="/share">
              <Link to="/share"><Icon type="file" />直播管理</Link>
            </Menu.Item>
            <Menu.Item key="/classes">
              <Link to="/classes"><Icon type="tag" />分类管理</Link>
            </Menu.Item>

            <Menu.Item key="/suser">
              <Link to="/suser"><Icon type="team" />用户管理</Link>
            </Menu.Item>

            <Menu.Item key="/users">
              <Link to="/users"><Icon type="contacts" />管理员管理</Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="setting" />系统设置</span>}>
              <Menu.Item key="1">微信菜单</Menu.Item>
              <Menu.Item key="2">微信分组</Menu.Item>
              <Menu.Item key="3">消息</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
