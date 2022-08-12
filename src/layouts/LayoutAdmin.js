import { Routes, Route, Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import './LayoutAdmin.scss'

const LayoutAdmin = props => {
  //const { route, routes } = props
  const { Header, Content, Footer } = Layout

  return (
    <Layout>
      <h2>Menu sider Admin ..</h2>
      <Layout>
        <Header> Header...sfsd </Header>
        <Content>
          {/* <LoadRoutes route={route} routes={routes} /> 
          <Routes></Routes>   */}
          <Outlet />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  )
}

const LoadRoutes = props => {
  const { route, routes } = props
  console.log('LoadRouters:')
  console.log(route)
  console.log(routes)

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} element={<route.component />} />
      ))}
    </Routes>
  )
}

/*

    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} element={<route.component />} />
      ))}
    </Routes>
  
*/
export default LayoutAdmin
