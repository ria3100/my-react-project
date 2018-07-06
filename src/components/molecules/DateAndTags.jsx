import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Row, Col } from 'antd'
import { Tags, Date } from '@/components/atoms'

const style = {
  Row: {
    marginBottom: '16px',
  },
  tagsCol: {
    textAlign: 'right',
  },
}

export default class extends React.Component {
  render() {
    return (
      <Row style={style.Row}>
        <Col span={12}>
          <Date date={this.props.date} />
        </Col>
        <Col span={12} style={style.tagsCol}>
          <Tags tags={this.props.tags} />
        </Col>
      </Row>
    )
  }
}
