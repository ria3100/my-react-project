import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Layout, Menu } from 'antd'
const { Header } = Layout

import { HamburgerMenu } from '@/components/molecules'

const Logo = styled.h1`
  width: 120px;
  height: 63px;
  color: #fff;
  font-size: 1.5em;
  margin: 0;
  float: left;
`

// const Hamburger = styled.div`
//   width: 100vw;
//   float: left;
//   height: ${props => (props.isOpen ? '100vh' : 0)};
//   transition: height .5s;
// `

const style = {
  header: {
    WebkitBackdropFilter: 'blur(8px)',
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    height: 'auto',
  },
  menu: {
    background: 'transparent',
    lineHeight: '64px',
    float: 'right',
  },
}

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return <Fragment>
        <Header style={style.header}>
          <Logo>{this.props.title}</Logo>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={style.menu}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3" onClick={() => this.toggle()}>
              nav 3
            </Menu.Item>
          </Menu>
          <HamburgerMenu isOpen={this.state.isOpen} />
        </Header>
      </Fragment>
  }
}
