import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { LoginForm } from '@/components/molecules'
// import { Header } from '@/components/organisms'

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>login</h2>
        <LoginForm />
      </Fragment>
    )
  }
}
