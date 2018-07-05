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

const TopMargin = styled.div`
  width: 100vw;
  float: left;
  height: 64px;
  background: #000;
`


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
    this.setState({ isOpen: !this.state.isOpen })
  }
  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      // console.log(window.pageYOffset)
    })
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') this.setState({ isOpen: false })
    })
  }
  render() {
    return (
      <Fragment>
        <Header style={style.header}>
          <Logo onClick={() => this.toggle()}>{this.props.title}</Logo>
          <HamburgerMenu isOpen={this.state.isOpen} />
        </Header>
        <TopMargin/>
      </Fragment>
    )
  }
}
