import './MenuTop.scss'
import logo from '../../../assets/img/png/logo-white.png'

import { Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons'

const MenuTop = props => {
  const { menuCollapsed, setMenuCollapsed } = props
  return (
    <div className="menutop">
      <div className="menutop__left">
        <img className="menutop__left-logo" src={logo} alt="Logo de ..." />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menutop__rigth">
        <Button type="link" onClick={() => console.log('click')}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
}

export default MenuTop
