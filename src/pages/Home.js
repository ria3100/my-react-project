import React from 'react'
import { Helmet } from 'react-helmet'

import { Card, Icon, Avatar, Row, Col } from 'antd'
const { Meta } = Card

import { Header } from '@/components'
// import { ArticleListItem } from '@/components/molecules'
import { ArticleList } from '@/components/organisms'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h2>Home</h2>
        <ArticleList />
      </div>
    )
  }
}
