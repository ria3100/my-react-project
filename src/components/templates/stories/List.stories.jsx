import React from 'react'
import { ListTemplate } from '../'

import { articles } from '../../../mock/data.js'

export default class extends React.Component {
  render() {
    return <ListTemplate articles={articles} />
  }
}
