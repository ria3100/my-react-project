import React from 'react'
import { Card } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <Card style={{ width: 300 }}>
        <p>{this.props.item}</p>
      </Card>
    )
  }
}
