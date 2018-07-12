import React from 'react'
import { HomeTemplate } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <HomeTemplate articles={articles} page={'top'}/>
  }
}
