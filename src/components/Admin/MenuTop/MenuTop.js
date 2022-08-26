import logo from '../../../assets/img/png/logo-white.png'
import { Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons'
import { logout } from '../../../api/auth'
import { Link } from 'react-router-dom'

import './MenuTop.scss'

const MenuTop = props => {
  const { menuCollapsed, setMenuCollapsed } = props
  const logoutUser = () => {
    logout()
    window.location.reload()
  }

  return (
    <div className="menutop">
      <div className="menutop__left">
        <Link to={'/'}>
          <img className="menutop__left-logo" src={logo} alt="Logo de ..." />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menutop__rigth">
        <Button type="link" onClick={logoutUser}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
}

export default MenuTop
