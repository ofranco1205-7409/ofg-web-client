import { Layout } from 'antd'

import './LayoutAdmin.scss'

const LayoutAdmin = props => {
  const { children } = props
  const { Header, Content, Footer } = Layout

  return (
    <Layout>
      <h2>Menu sider Admin ..</h2>
      <Layout>
        <Header> Header...sfsd </Header>
        <Content>{children}</Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutAdmin
