import React from 'react'
import styled from 'styled-components'

const Mainvisual = styled.div`
  width: 100%;
  height: 600px;
  float: left;
  background: url(/static/mojave-night.jpg) top left / cover;
`

export default class extends React.Component {
  render() {
    return(<Mainvisual />)
  }
}
