import loadable from 'loadable-components'

const Stores = {
  Counr: loadable(() => import('./Count')),
}
module.exports = Stores
