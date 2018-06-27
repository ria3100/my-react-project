import React from 'react'
import { Helmet } from 'react-helmet'

import { LoginForm } from '@/components/molecules'
// import { Header } from '@/components/organisms'

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>login</h2>
        <LoginForm />
      </div>
    )
  }
}
