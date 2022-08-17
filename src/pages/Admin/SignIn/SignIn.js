import './SignIn.scss'
import { Layout, Tabs } from 'antd'
import logo from '../../../assets/img/png/logo-white.png'
import RegisterForm from '../../../components/Admin/RegisterForm/RegisterForm'

const SignIn = () => {
  const { Content } = Layout
  const { TabPane } = Tabs

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={logo} alt="Logo ofg" />
        </h1>

        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              Component Login Form
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
