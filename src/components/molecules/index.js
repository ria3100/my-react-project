import loadable from 'loadable-components'

const Organisms = {
  HamburgerMenu: loadable(() => import('./HamburgerMenu')),
  HeaderContent: loadable(() => import('./HeaderContent')),
  ArticleListItem: loadable(() => import('./ArticleListItem')),
  DateAndTags: loadable(() => import('./DateAndTags')),
  ArticleInput: loadable(() => import('./ArticleInput')),
  LoginForm: loadable(() => import('./LoginForm')),
}
module.exports = Organisms
