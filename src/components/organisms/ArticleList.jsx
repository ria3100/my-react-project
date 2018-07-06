import React, { Fragment } from 'react'

import { List, Row, Col, Pagination } from 'antd'
import { ArticleListItem } from '@/components/molecules'

const style = {
  ListRow: {
    marginBottom: '64px',
  },
}

export default class extends React.Component {
  render() {
    return <Row style={style.ListRow}>
        <Col span={20} offset={2}>
          <List itemLayout="horizontal" dataSource={this.props.articles} renderItem={item => <ArticleListItem item={item} />} />
          <Pagination defaultCurrent={1} total={50} defaultPageSize={8}/>
        </Col>
      </Row>
  }
}
