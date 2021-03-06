import loadable from 'loadable-components'

const Pages = {
  HomeTemplate: loadable(() => import('./HomeTemplate')),
  ListTemplate: loadable(() => import('./ListTemplate')),
  ArticleTemplate: loadable(() => import('./ArticleTemplate')),
  EditTemplate: loadable(() => import('./EditTemplate')),
  AboutTemplate: loadable(() => import('./AboutTemplate')),
  LoginTemplate: loadable(() => import('./LoginTemplate')),
  ProfileTemplate: loadable(() => import('./ProfileTemplate')),
}
module.exports = Pages
