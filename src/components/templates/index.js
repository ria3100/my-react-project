import loadable from 'loadable-components'

const Pages = {
  HomeTemplate: loadable(() => import('./HomeTemplate')),
  AboutTemplate: loadable(() => import('./AboutTemplate')),
  LoginTemplate: loadable(() => import('./LoginTemplate')),
  ProfileTemplate: loadable(() => import('./ProfileTemplate')),
}
module.exports = Pages
