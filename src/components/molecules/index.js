import loadable from 'loadable-components'

const Organisms = {
  HamburgerMenu: loadable(() => import('./HamburgerMenu')),
  HeaderContent: loadable(() => import('./HeaderContent')),
  ArticleCard: loadable(() => import('./ArticleCard')),
  LoginForm: loadable(() => import('./LoginForm')),
}
module.exports = Organisms
