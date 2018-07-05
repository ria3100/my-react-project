import React from 'react'
import { SmallArticleList } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <SmallArticleList articles={articles}/>
  }
}
