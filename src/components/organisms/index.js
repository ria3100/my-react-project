import loadable from 'loadable-components'

const Molecules = {
  Header: loadable(() => import('./Header')),
  Footer: loadable(() => import('./Footer')),
  ArticleList: loadable(() => import('./ArticleList')),
  Mainvisual: loadable(() => import('./Mainvisual')),
  Card: loadable(() => import('./Card')),
}
module.exports = Molecules
