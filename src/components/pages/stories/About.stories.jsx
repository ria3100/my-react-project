import React from 'react'
import { Provider } from 'mobx-react'
import { AboutPage } from '../'
import Stores from '@/stores'

export default class extends React.Component {
  render() {
    return (
      <Provider {...Stores}>
        <AboutPage />
      </Provider>
    )
  }
}
