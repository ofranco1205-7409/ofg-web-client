import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import MenuTop from '../components/Admin/MenuTop'
import MenuSider from '../components/Admin/MenuSider/MenuSider'
import AdminSingIn from '../pages/Admin/SignIn/SignIn'

import './LayoutAdmin.scss'

const LayoutAdmin = props => {
  const { children } = props
  const [menuCollapsed, setMenuCollapsed] = useState(false)

  const { Header, Content, Footer } = Layout

  const user = null

  if (!user) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminSingIn />} />
        <Route path="*" element={<AdminSingIn />} />
      </Routes>
    )
  }

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
        </Header>
        <Content className="layout-admin__content" style={{ marginLeft: menuCollapsed ? '80px' : '200px' }}>
          {children}
        </Content>
        <Footer className="layout-admin__footer" style={{ marginLeft: menuCollapsed ? '80px' : '200px' }}>
          Omar Franco García
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutAdmin
