import loadable from 'loadable-components'

const Atoms = {
  Content: loadable(() => import('./Content')),
  Button: loadable(() => import('./Button')),
  Img: loadable(() => import('./Img')),
}
module.exports = Atoms
