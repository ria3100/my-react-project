import React from 'react'

import { Layout } from 'antd'
const { Footer, Content } = Layout

import { Header } from '@/components/organisms'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('CountStore')
@observer
export default class extends React.Component {
  static propTypes = {
    CountStore: PropTypes.object.isRequired,
  }
  render() {
    const { CountStore } = this.props
    return (
      <Layout>
        <Header title={'title'} />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <h2>About</h2>
          Count: {CountStore.num} <br />
          Double count: {CountStore.getDoubleCount} <br />
          <button onClick={CountStore.onIncrement}>+1</button>
          <button onClick={CountStore.onDecrement}>-1</button>
          <button onClick={CountStore.onAsyncIecrement}>After 1000ms +1</button>
        </Content>
        <Footer />
      </Layout>
    )
  }
}
