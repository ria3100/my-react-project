import React, { Fragment } from 'react'

import { LoginForm } from '@/components/molecules'

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
