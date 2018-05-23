import loadable from 'loadable-components'

const Layouts = {
  Default: loadable(() => import('./Default')),
}
module.exports = Layouts
