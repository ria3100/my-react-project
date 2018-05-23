import loadable from 'loadable-components'

const Components = {
  Header: loadable(() => import('./Header')),
  Login: loadable(() => import('./Login')),
}
module.exports = Components
