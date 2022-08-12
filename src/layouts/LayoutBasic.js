import { Layout } from 'antd'

import './LayoutBasic.scss'

const LayoutBasic = props => {
  const { children } = props
  const { Content, Footer } = Layout
  return (
    <Layout>
      <h2>Menu ...</h2>
      <Layout>
        <Content>{children}</Content>
        <Footer>Omar ranco García</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutBasic
