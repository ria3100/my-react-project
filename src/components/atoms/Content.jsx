import React from 'react'
import styled from 'styled-components'

import { Layout } from 'antd'
const { Content } = Layout

const style = {
  content: {
    float: 'left',
    height: '1600px',
    marginTop: 64,
  },
}


export default class extends React.Component {
  render() {
    return <Content style={style.content} {...this.props} />
  }
}
