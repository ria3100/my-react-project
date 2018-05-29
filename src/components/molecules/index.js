import loadable from 'loadable-components'

const Organisms = {
  ArticleListItem: loadable(() => import('./ArticleListItem')),
}
module.exports = Organisms
