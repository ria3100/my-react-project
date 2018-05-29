import loadable from 'loadable-components'

const Pages = {
  Home: loadable(() => import('@/pages/Home')),
  About: loadable(() => import('@/pages/About')),
  Login: loadable(() => import('@/pages/Login')),
  Profile: loadable(() => import('@/pages/Profile')),
  Edit: loadable(() => import('@/pages/Edit')),
}
module.exports = Pages
