import loadable from 'loadable-components'

const Pages = {
  HomePage: loadable(() => import('./HomePage')),
  ArticlePage: loadable(() => import('./ArticlePage')),
  EditPage: loadable(() => import('./EditPage')),
  AboutPage: loadable(() => import('./AboutPage')),
  LoginPage: loadable(() => import('./LoginPage')),
  ProfilePage: loadable(() => import('./ProfilePage')),
}
module.exports = Pages
