import { createElement } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { history, Link } from 'ice';
import _ from 'lodash';
import { Avatar, Menu, Dropdown } from 'antd';
import { EditOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import { asideMenuConfig } from './menuConfig';
import styles from './index.module.less';

// const loginOut = async () => {
//   localStorage.setItem('token', '');
//   history!.push('/login');
// };

const downMenu = (
  <Menu
    className={styles.menu_box}
    items={[
      {
        label: '个人设置',
        key: 'settings',
        icon: <SettingOutlined />,
      },
      {
        label: '退出登录',
        key: 'logout',
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

const loopMenuItem = (menus) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && createElement(icon),
    children: children && loopMenuItem(children),
  }));

const BasicLayout = ({ children, location }) => {
  // const [userState, userDispatchers] = appStore.useModel('user');
  // const userId = localStorage.getItem('userId');
  // useEffect(() => {
  //   userDispatchers.userInfo(userId);
  // }, []);
  if (['/login', '/editor'].includes(_.get(location, 'pathname'))) {
    return <div style={{ height: `${window.innerHeight}px` }}>{children}</div>;
  }

  const handleEditor = () => {
    const { pathname } = location;
    history!.push(`/editor?p=${pathname}`);
  };

  return (
    <ProLayout
      title="amis"
      className={styles.container}
      style={{ minHeight: '100vh' }}
      logo={logo}
      location={{
        pathname: location.pathname,
      }}
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
      headerContentRender={() => {
        if (['/'].includes(_.get(location, 'pathname'))) {
          return null;
        }
        return <EditOutlined className="pointer" onClick={handleEditor} />;
      }}
      rightContentRender={() => (
        <Dropdown overlay={downMenu} placement="bottomCenter" arrow>
          <div className={styles.avatar}>
            <Avatar style={{ cursor: 'pointer' }} shape="square" size="small" icon={<UserOutlined />} />
            <span>admin</span>
          </div>
          {/* <span>{_.get(userState, 'user.nickName')}</span> */}
        </Dropdown>
      )}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
    >
      <div className={`scrollbar ${styles.container}`}>{children}</div>
    </ProLayout>
  );
};

export default BasicLayout;
