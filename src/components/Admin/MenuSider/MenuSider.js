import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { HomeOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons'

import './MenuSider.scss'

const MenuSider = props => {
  const items = [
    {
      label: <Link to={'/admin'}>Home</Link>,
      key: '/admin',
      icon: <HomeOutlined />
    },
    {
      label: <Link to={'/admin/users'}>Usuarios</Link>,
      key: '/admin/users',
      icon: <UserOutlined />
    },
    {
      label: <Link to={'/admin/menu'}>Menu</Link>,
      key: '/admin/menu',
      icon: <MenuOutlined />
    },
    {
      label: <Link to={'/admin/menu-web'}>Menu Web</Link>,
      key: '/admin/menu-web',
      icon: <UserOutlined />
    }
  ]
  const { menuCollapsed } = props
  const { Sider } = Layout
  let location = useLocation()
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      {/*}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin']}>
        <Menu.Item key={'1'}>
          <Link to={'/admin'}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={'/admin/users'}>
          <Link to="/admin/users">
            <UserOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={'2'}>
          <Link to={'/admin/menu-web'}>
            <MenuOutlined />
            <span className="nav-text">Menu Web</span>
          </Link>
        </Menu.Item>
      </Menu>
      {*/}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} items={items} />
    </Sider>
  )
}

export default MenuSider
