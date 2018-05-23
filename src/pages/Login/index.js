import React from 'react'
import { Helmet } from 'react-helmet'

import firebase from 'firebase'

import { Header, Login } from '../../components'

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>login</h2>
        <Login />
      </div>
    )
  }
}
