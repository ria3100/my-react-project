import loadable from 'loadable-components'

const Organisms = {
  ArticleCard: loadable(() => import('./ArticleCard')),
  LoginForm: loadable(() => import('./LoginForm')),
}
module.exports = Organisms
