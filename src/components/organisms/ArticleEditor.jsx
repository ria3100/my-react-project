import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Button, Row, Col } from 'antd'
import { ArticleInput } from '@/components/molecules'
import { Article } from '@/components/organisms'

const style = {
  Row: {
    marginBottom: '16px',
    height: 'calc(100vh - 300px)',
    borderBottom: '1px solid #aaa',
  },
  LeftCol: {
    borderRight: '1px solid #aaa',
    padding: '32px',
  },
}

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Row style={style.Row}>
          <Col span={12} style={style.LeftCol}>
            <ArticleInput article={this.props.article} onChange={article => { this.props.onChange(article) }} />
          </Col>
          <Col span={12}>
            <Article article={this.props.article} />
          </Col>
        </Row>
        <Button type="primary" size="large">Normal</Button>
      </Fragment>
    )
  }
}
