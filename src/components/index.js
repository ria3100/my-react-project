import loadable from 'loadable-components'

const Components = {
  Header: loadable(() => import('@/components/Header')),
  Login: loadable(() => import('@/components/Login')),
  TwitterLogin: loadable(() => import('@/components/TwitterLogin')),
}
module.exports = Components
