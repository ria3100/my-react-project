import React from 'react'
import { ArticleEditor } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <ArticleEditor article={articles[0]} />
  }
}
