//Layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//Admin Pages
import AdminHome from '../pages/Admin'
import AdminSignIn from '../pages/Admin/SignIn'

//pages
import Home from '../pages/Home'
import Contact from '../pages/Contact'

//Other
import Error404 from '../pages/Error404'

const routesAdmin = [
  {
    path: '/admin',
    layout: LayoutAdmin,
    component: AdminHome
  },
  {
    path: '/admin/login',
    layout: LayoutAdmin,
    component: AdminSignIn
  },
  {
    path: '*',
    layout: LayoutAdmin,
    component: Error404
  }
]

const routesClient = [
  {
    path: '/',
    layout: LayoutBasic,
    component: Home
  },
  {
    path: '/contact',
    layout: LayoutBasic,
    component: Contact
  }
]

const routes = [...routesAdmin, ...routesClient]

export default routes
