import React from 'react'
import styled from 'styled-components'

import { Layout } from 'antd'
const { Footer } = Layout

import { Card } from '@/components/organisms'

const Logo = styled.h1`
  width: 120px;
  height: 63px;
  color: #fff;
  font-size: 1.5em;
  margin: 0;
  float: left;
`

const style = {
  footer: {
    width: '100%',
    height: '500px',
    background: '#f2f2f2',
    // background: '-webkit-linear-gradient(to top, #485563, #29323c)',
    // background: 'linear-gradient(to top, #485563, #29323c)',
  },
}


export default class extends React.Component {
  render() {
    return <Footer style={style.footer}>
      <Card />
    </Footer>
  }
}
