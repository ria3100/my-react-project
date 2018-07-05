import React from 'react'
import styled from 'styled-components'

import { Card } from 'antd'
const { Meta } = Card

// importantしたい
const MyMeta = styled(Meta)`
  .ant-card-meta-title {
    word-wrap: break-word;
    white-space: normal;
  }
`

export default class extends React.Component {
  render() {
    return (
      <Card>
        <MyMeta
          className="title"
          title={this.props.item.title}
          description={this.props.item.body}
        />
      </Card>
    )
  }
}
