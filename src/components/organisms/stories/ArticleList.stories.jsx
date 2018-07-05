import React from 'react'
import { ArticleList } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <ArticleList articles={articles}/>
  }
}
