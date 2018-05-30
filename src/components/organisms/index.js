import loadable from 'loadable-components'

const Molecules = {
  ArticleList: loadable(() => import('./ArticleList')),
  Header: loadable(() => import('./Header')),
}
console.log(Molecules)
module.exports = Molecules
