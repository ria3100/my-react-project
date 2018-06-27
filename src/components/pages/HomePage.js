import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

// import { Layout} from 'antd'
// const { Header, Footer, Content } = Layout
// const { Meta } = Card

import { HomeTemplate } from '@/components/templates'

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HomeTemplate />
      </Fragment>
    )
  }
}
