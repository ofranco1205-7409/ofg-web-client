import { Layout, Tabs } from 'antd'
import { Routes, Route } from 'react-router-dom'
import logo from '../../../assets/img/png/logo-white.png'
import RegisterForm from '../../../components/Admin/RegisterForm'
import LoginForm from '../../../components/Admin/LoginForm'
import { getAccessTokenApi } from '../../../api/auth'
import Admin from '../../../pages/Admin'

import './SignIn.scss'

const SignIn = () => {
  const { Content } = Layout
  const { TabPane } = Tabs

  if (getAccessTokenApi()) {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Admin />} />
      </Routes>
    )
  }

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={logo} alt="Logo ofg" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  )
}

export default SignIn
