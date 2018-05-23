import loadable from 'loadable-components'

const Pages = {
  Home: loadable(() => import('./Home')),
  About: loadable(() => import('./About')),
  Login: loadable(() => import('./Login')),
}
module.exports = Pages
