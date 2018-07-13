import React from 'react'

import { inject, observer } from 'mobx-react'
import { Layout } from 'antd'

import { Content } from '@/components/atoms'
import {
  Header,
  Footer,
  Article,
} from '@/components/organisms'

@observer
export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Header title={'title'} {...this.props} />
        <Content style={{ float: 'left' }}>
          <Article {...this.props} />
        </Content>
        <Footer />
      </Layout>
    )
  }
}
