import loadable from 'loadable-components'

const Atoms = {
  Content: loadable(() => import('./Content')),
  HeaderBgSVG: loadable(() => import('./HeaderBgSVG')),
  Tags: loadable(() => import('./Tags')),
  Date: loadable(() => import('./Date')),
  LogoSVG: loadable(() => import('./LogoSVG')),
  Button: loadable(() => import('./Button')),
  Img: loadable(() => import('./Img')),
  Markdown: loadable(() => import('./Markdown')),
  CodeBlock: loadable(() => import('./CodeBlock')),
  Editor: loadable(() => import('./Editor')),
  TagEditor: loadable(() => import('./TagEditor')),
}
module.exports = Atoms
