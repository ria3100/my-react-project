import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { AboutTemplate } from '@/components/templates'

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <AboutTemplate />
      </Fragment>
    )
  }
}
