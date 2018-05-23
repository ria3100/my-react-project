import loadable from 'loadable-components'

const Pages = {
  Home: loadable(() => import('./Home')),
  About: loadable(() => import('./About')),
}
module.exports = Pages
