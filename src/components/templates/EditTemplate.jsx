import React from 'react'

import { Layout } from 'antd'

import { Content } from '@/components/atoms'
import { Header, Footer, ArticleEditor } from '@/components/organisms'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={'Edit Page'} />
        <Content style={{ float: 'left' }}>
          <ArticleEditor article={this.props.article} onChange={article => { this.props.onChange(article) }}/>
        </Content>
      </Layout>
    )
  }
}
