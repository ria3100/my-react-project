import React from 'react'
import styled from 'styled-components'

import { Layout, Menu } from 'antd'
const { Header } = Layout

const Logo = styled.h1`
  width: 120px;
  height: 63px;
  color: #fff;
  font-size: 1.5em;
  margin: 0;
  float: left;
`

const style = {
  header: {
    WebkitBackdropFilter: 'blur(8px)',
    position: 'fixed',
    zIndex: 100,
    width: '100%',
  },
  menu: {
    background: 'transparent',
    lineHeight: '64px',
  },
}


export default class extends React.Component {
  render() {
    return <Header style={style.header}>
        <Logo>{this.props.title}</Logo>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={style.menu}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
  }
}
