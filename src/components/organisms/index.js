import loadable from 'loadable-components'

const Molecules = {
  Header: loadable(() => import('./Header')),
  HeaderMenu: loadable(() => import('./HeaderMenu')),
  Footer: loadable(() => import('./Footer')),
  SmallArticleList: loadable(() => import('./SmallArticleList')),
  ArticleList: loadable(() => import('./ArticleList')),
  Article: loadable(() => import('./Article')),
  // Mainvisual: loadable(() => import('./Mainvisual')),
  Card: loadable(() => import('./Card')),
  TopPageSection: loadable(() => import('./TopPageSection')),
}
module.exports = Molecules
