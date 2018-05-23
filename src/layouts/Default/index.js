import * as React from 'react'
import { renderRoutes } from 'react-router-config'

import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <h1>title</h1>
        </Header>
        <Content>{renderRoutes(this.props.route.routes)}</Content>
        <Footer />
      </Layout>
    )
  }
}
