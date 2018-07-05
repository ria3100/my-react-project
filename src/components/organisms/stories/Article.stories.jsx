import React from 'react'
import { Article } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <Article articles={articles}/>
  }
}
