import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import routes from './config/routes'

import './App.scss'

import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app">
      <h1>Sistema de rutas basico</h1>

      <Link to="/">Home</Link>
      <br></br>
      <Link to="/contact">Contact</Link>
      <br></br>
      <Link to="/admin">Admin</Link>
      <br></br>
      <Link to="/admin/login">Admin login</Link>
      <br></br>
      <Link to="/otro">otro</Link>

      <RouteWithSubRoutes routes={routes} />

      {/*}
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
            ))}
          {*/}

      {/*}
        {routes.map((route, index) => (
          <Route path={route.path} exact={route.exact} key={index} element={<route.component routes={route.routes} />}>
            {route.routes.map((r, i) => (
              <Route path={r.path} exact={r.exact} key={i} element={<r.component />} />
            ))}       
          </Route>
        ))}
{*/}

      {/*}
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route exact={true} path="/admin" element={<AdminHome />} />
            <Route exact={true} path="/admin/login" element={<SignIn />} />
          </Route>
          {*/}

      {/*}
          <Route path="/admin" exact={true} element={<AdminHome />} />
          {*/}
      {/*<Routes>}
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
          {</Routes>*/}
    </div>
  )
}

//function RouteWithSubRoutes(route) {
const RouteWithSubRoutes1 = route => {
  console.log(route)
  return <Route path={route.path} exact={route.exact} render={props => <route.component routes={route.routes} {...props} />} />
}
const RouteWithSubRoutes = ({ routes }) => {
  console.log(routes)
  return (
    <Routes>
      {/* <Route path="*" element={<Error404 />} /> */}
      {routes.map((route, index) => (
        <Route path={route.path} exact={route.exact} key={index} element={<route.component />}>
          {route.routes.map((r, i) => (
            <Route path={r.path} exact={r.exact} key={i} element={<r.component />} />
          ))}
        </Route>
      ))}
    </Routes>
  )
}

export default App
