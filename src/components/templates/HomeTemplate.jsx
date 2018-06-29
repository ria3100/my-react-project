import React from 'react'

import { Layout } from 'antd'
// const { Content } = Layout

import { Content } from '@/components/atoms'
import { Header, Footer, Mainvisual } from '@/components/organisms'

export default class extends React.Component {
  render() {
    return <Layout>
        <Header title={'title'} />
        <Content style={{ float:'left', height: '1600px', marginTop: 64 }}>
          <Mainvisual />
          <h2>Home</h2>
        </Content>
        <Footer />
      </Layout>
  }
}
