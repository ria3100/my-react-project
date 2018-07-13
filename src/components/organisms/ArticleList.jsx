import React, { Fragment } from 'react'

import { inject, observer } from 'mobx-react'
import { List, Row, Col, Pagination } from 'antd'
import { ArticleListItem } from '@/components/molecules'

const style = {
  ListRow: {
    marginBottom: '64px',
  },
}


@observer
export default class extends React.Component {
  render() {
    return (
      <Row style={style.ListRow}>
        <Col span={20} offset={2}>
          <List
            itemLayout="horizontal"
            dataSource={this.props.ArticlesStore.list}
            renderItem={item => <ArticleListItem item={item} />}
          />
          <Pagination
            defaultCurrent={1}
            total={100}
            defaultPageSize={8}
            onChange={this.props.ArticlesStore.pageChange}
          />
        </Col>
      </Row>
    )
  }
}
