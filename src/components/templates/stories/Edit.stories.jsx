import React from 'react'
import { EditTemplate } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <EditTemplate article={articles[0]} />
  }
}
