import React from 'react'
import { Helmet } from 'react-helmet'

import { Card, Icon, Avatar, Row, Col } from 'antd'
const { Layout, Header, Footer, Content } = Layout
const { Meta } = Card

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
        <Layout>
          <Header>
            <h1>title</h1>
          </Header>
          <Content>
            <h2>Home</h2>
            <ArticleList />
          </Content>
          <Footer />
        </Layout>
      </div>
    )
  }
}
