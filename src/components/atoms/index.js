import loadable from 'loadable-components'

const Atoms = {
  Button: loadable(() => import('./Button')),
  Img: loadable(() => import('./Img')),
}
module.exports = Atoms
