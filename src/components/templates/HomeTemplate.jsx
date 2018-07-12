import React from 'react'

import { Layout } from 'antd'

import { Content } from '@/components/atoms'
import {
  Header,
  Footer,
  ArticleList,
  TopPageSection,
} from '@/components/organisms'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={'title'} page={this.props.page}/>
        <Content style={{ float: 'left' }}>
          <ArticleList articles={this.props.articles}/>
          {/* <TopPageSection theme={'gray'} position={'right'} title={'モダンWeb'} />
          <TopPageSection theme={'light'} position={'left'} title={'SPA'} />
          <TopPageSection theme={'dark'} position={'right'} title={'Profile'} /> */}
        </Content>
        <Footer />
      </Layout>
    )
  }
}
