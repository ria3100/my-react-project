import React from 'react'

import { Layout } from 'antd'

import { Content } from '@/components/atoms'
import {
  Header,
  Footer,
  SmallArticleList,
  TopPageSection,
} from '@/components/organisms'

export default class extends React.Component {
  render() {
    return <Layout>
        <Header title={'title'} />
        <Content style={{ float: 'left' }}>
          <SmallArticleList articles={this.props.articles}/>
          <TopPageSection theme={'gray'} position={'right'} title={'モダンWeb'} />
          <TopPageSection theme={'light'} position={'left'} title={'SPA'} />
          <TopPageSection theme={'dark'} position={'right'} title={'Profile'} />
        </Content>
        <Footer />
      </Layout>
  }
}
