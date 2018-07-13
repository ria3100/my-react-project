import React from 'react'

import { Layout } from 'antd'
import { inject, observer } from 'mobx-react'

import { Content } from '@/components/atoms'
import {
  Header,
  Footer,
  ArticleList,
  TopPageSection,
} from '@/components/organisms'

@observer
export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={'title'} {...this.props} />
        <Content style={{ float: 'left' }}>
          <ArticleList {...this.props} />
          {/* <TopPageSection theme={'gray'} position={'right'} title={'モダンWeb'} />
          <TopPageSection theme={'light'} position={'left'} title={'SPA'} />
          <TopPageSection theme={'dark'} position={'right'} title={'Profile'} /> */}
        </Content>
        <Footer />
      </Layout>
    )
  }
}
