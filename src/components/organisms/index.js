import loadable from 'loadable-components'

const Molecules = {
  ArticleList: loadable(() => import('./ArticleList')),
}
console.log(Molecules)
module.exports = Molecules
