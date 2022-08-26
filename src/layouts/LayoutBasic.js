import { Routes, Route } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import MenuTop from '../components/Web/MenuTop'
import './LayoutBasic.scss'

export default function LayoutBasic(props) {
  const { routes } = props
  const { children } = props
  const { Footer } = Layout
  return (
    <Row>
      <Col lg={4} />
      <Col lg={16}>
        <MenuTop />
        {children}
        <Footer>Omar Franco Garcia</Footer>
      </Col>
      <Col lg={4} />
    </Row>
  )
}

/* function LoadRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Routes>
  );
} */
