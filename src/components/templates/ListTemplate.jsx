import React from 'react'

import { Layout } from 'antd'

import { Content } from '@/components/atoms'
import {
  Header,
  Footer,
  ArticleList,
} from '@/components/organisms'

export default class extends React.Component {
  render() {
    return <Layout>
        <Header title={'title'} />
        <Content style={{ float: 'left' }}>
          <ArticleList />
        </Content>
        <Footer />
      </Layout>
  }
}
