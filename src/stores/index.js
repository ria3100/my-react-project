import loadable from 'loadable-components'

import Count from '@/stores/Count'
import Editor from '@/stores/Editor'

const Stores = {
  count: new Count(),
  editor: new Editor(),
}
module.exports = Stores
