import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { HomeTemplate } from '@/components/templates'

export default class extends React.Component {
  render() {
    const page = this.props.match.url == '/' ? 'top' : 'list'
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HomeTemplate page={page}/>
      </Fragment>
    )
  }
}
