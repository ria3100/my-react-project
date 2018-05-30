import React from 'react'

import { Row, Col } from 'antd'
import { ArticleCard } from '@/components/molecules'

export default class extends React.Component {
  render() {
    const items = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']
    return (
      <Row gutter={24}>
        {items.map(item => {
          return (
            <Col sm={24} md={12} style={{ marginBottom: 24 }}>
              <ArticleCard item={item} />
            </Col>
          )
        })}
      </Row>
    )
  }
}
