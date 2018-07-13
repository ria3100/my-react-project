import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Input } from 'antd'
const { TextArea } = Input

const StyledTextArea = styled(TextArea)`
  resize: none;
  // border: none !important;
  // width: 100%;
  // height: 500px;
  // &:focus {
  //   outline: 0;
  //   border: none !important;
  // }
`

export default class extends React.Component {
  render() {
    return (
      <StyledTextArea autosize={true} value={this.props.md} onChange={(e) => this.props.onChange(e.target.value)}/>
    )
  }
}
