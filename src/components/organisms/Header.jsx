import React from 'react'
import styled from 'styled-components'

import { Layout, Menu } from 'antd'
const { Header } = Layout

const Logo = styled.h1`
  font-size: 1.5em;
  color: #fff;
  margin: 0;
`

export default class extends React.Component {
  render() {
    return <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" style={{ float: 'left', width: '120px' }}>
          <Logo>{this.props.title}</Logo>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
  }
}
