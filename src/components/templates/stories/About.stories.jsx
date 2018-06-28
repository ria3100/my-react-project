import React from 'react'
import { Provider } from 'mobx-react'
import { AboutTemplate } from '../'
import Stores from '@/stores'

export default class extends React.Component {
  render() {
    return (
      <Provider {...Stores}>
        <AboutTemplate />
      </Provider>
    )
  }
}
