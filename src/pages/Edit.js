import React from 'react'

import { Row, Col, Steps, Button, message } from 'antd'
import { Editor, Preview } from '@/components'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>aaa</Col>
          <Col span={10}>
            <Editor />
          </Col>
          <Col span={10}>
            <Preview />
          </Col>
        </Row>
      </div>
    )
  }
}
