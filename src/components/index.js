import loadable from 'loadable-components'

const Components = {
  Header: loadable(() => import('@/components/Header')),
  Login: loadable(() => import('@/components/Login')),
  TwitterLogin: loadable(() => import('@/components/atoms/Button')),
  Editor: loadable(() => import('@/components/Editor')),
  Preview: loadable(() => import('@/components/Preview')),
}
module.exports = Components
