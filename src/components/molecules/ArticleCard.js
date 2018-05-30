import React from 'react'

import { Card } from 'antd'
const { Meta } = Card
import { Img } from '@/components/atoms'

export default class extends React.Component {
  render() {
    return (
      <Card>
        {/* <p>{this.props.item}</p> */}
        <Meta title="{this.props.item}" description="www.instagram.com" />
      </Card>
    )
  }
}
