//Layout
import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

//Admin Pages
import AdminHome from '../pages/Home'
import AdminSignIn from '../pages/Admin/SignIn'

//pages
import Home from '../pages/Home'
import Contact from '../pages/Contact'

//Other
import Error404 from '../pages/Error404'

const routes = [
  {
    path: '/admin',
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: '',
        component: AdminHome,
        exact: true
      },
      {
        path: 'login',
        component: AdminSignIn,
        exact: true
      },
      {
        path: '*',
        component: Error404
      }
    ]
  },
  {
    path: '/',
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/contact',
        component: Contact,
        exact: true
      },
      {
        path: '*',
        component: Error404
      }
    ]
  }
]

export default routes
