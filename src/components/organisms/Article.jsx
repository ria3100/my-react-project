import React from 'react'

import { List, Avatar, Button, Spin, Row, Col, Tag } from 'antd'

export default class extends React.Component {
  state = {
    loading: false,
    loadingMore: false,
    showLoadingMore: true,
    data: this.props.articles,
  }
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null;
    return <Row>
        <Col span={20} offset={2}>
          <List loading={loading} itemLayout="horizontal" dataSource={data} renderItem={item => <List.Item>
                <List.Item.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title={<a href="https://ant.design">
                      {item.title}
                    </a>} description={<div>
                      Ant Design, a design language for background applications, is refined by Ant UED Team Ant Design, a design language for background applications, is refined by Ant UED Team
                      <br />
                      <Tag color="blue">blue</Tag>
                      <Tag color="blue">blue</Tag>
                      <Tag color="blue">blue</Tag>
                    </div>} />
              </List.Item>} />
        </Col>
      </Row>
  }
}
