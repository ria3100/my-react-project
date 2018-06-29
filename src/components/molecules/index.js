import loadable from 'loadable-components'

const Organisms = {
  HamburgerMenu: loadable(() => import('./HamburgerMenu')),
  ArticleCard: loadable(() => import('./ArticleCard')),
  LoginForm: loadable(() => import('./LoginForm')),
}
module.exports = Organisms
