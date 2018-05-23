import loadable from 'loadable-components'

const Components = {
  Header: loadable(() => import('./Header')),
}
module.exports = Components
