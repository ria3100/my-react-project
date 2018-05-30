import loadable from 'loadable-components'

const Pages = {
  Home: loadable(() => import('./Home')),
  About: loadable(() => import('./About')),
  Login: loadable(() => import('./Login')),
  Profile: loadable(() => import('./Profile')),
}
module.exports = Pages
