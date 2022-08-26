//Layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//Admin Pages
import AdminHome from '../pages/Admin'
import AdminSignIn from '../pages/Admin/SignIn'
import AdminUsers from '../pages/Admin/Users'
import AdminMenuWeb from '../pages/Admin/MenuWeb'

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
    path: '/admin/users',
    layout: LayoutAdmin,
    component: AdminUsers
  },
  {
    path: '/admin/menu',
    layout: LayoutAdmin,
    component: AdminMenuWeb
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
  },
  /* {
    path: '/courses',
    layout: LayoutBasic,
    component: Courses
  },
  {
    path: '/blog',
    layout: LayoutBasic,
    component: Blog
  },
  {
    path: '/blog/:url',
    layout: LayoutBasic,
    component: Blog
  },*/
  {
    path: '*',
    layout: LayoutBasic,
    component: Error404
  }
]

const routes = [...routesAdmin, ...routesClient]

export default routes
