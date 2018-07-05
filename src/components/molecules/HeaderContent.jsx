import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  float: left;
  height: ${props => (props.small ? 200 : 300)};
  color: #fff;
`

export default class extends React.Component {
  render() {
    return (
      <Content small={this.props.small} >
      aaa
      </Content>
    )
  }
}
