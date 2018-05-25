import loadable from 'loadable-components'

const Layouts = {
  Default: loadable(() => import('@/layouts/Default')),
}
module.exports = Layouts
