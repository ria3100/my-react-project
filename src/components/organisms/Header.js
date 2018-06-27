import React from 'react'

import { Layout } from 'antd'
const { Header } = Layout

export default class extends React.Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h2>{this.props.title}</h2>
      </Header>
    )
  }
}
