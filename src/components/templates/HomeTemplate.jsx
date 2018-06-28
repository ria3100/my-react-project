import React from 'react'

import { Layout } from 'antd'
const { Footer, Content } = Layout

import { Header } from '@/components/organisms'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={'title'} />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <h2>Home</h2>
        </Content>
        <Footer />
      </Layout>
    )
  }
}
