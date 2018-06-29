import React from 'react'
import styled from 'styled-components'

const HamburgerMenu = styled.div`
  width: 100vw;
  float: left;
  height: ${props => (props.isOpen ? '100vh' : 0)};
  transition: height .5s;
  overflow: hidden;
  color: #fff;
`

export default class extends React.Component {
  render() {
    return <HamburgerMenu isOpen={this.props.isOpen}>
      </HamburgerMenu>
  }
}
