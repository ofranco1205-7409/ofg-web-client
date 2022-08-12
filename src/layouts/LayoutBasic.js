import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import './LayoutBasic.scss'

const LayoutBasic = () => {
  const { Content, Footer } = Layout
  return (
    <Layout>
      <h2>Menu ...</h2>
      <Layout>
        <Content>
          <Outlet />
        </Content>
        <Footer>Omar ranco García</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutBasic
