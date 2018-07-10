import React from 'react'
import { ArticleTemplate } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <ArticleTemplate article={articles[0]} />
  }
}
