import * as React from 'react'
import { Helmet } from 'react-helmet'

import { Card, Icon, Avatar, Row, Col } from 'antd'
const { Meta } = Card

import { Header } from '../../components'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h2>Home</h2>
        <Row gutter={24}>
          {[1, 2, 3].map(item => {
            return (
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <Icon type="setting" />,
                    <Icon type="edit" />,
                    <Icon type="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="item"
                    description="This is the description"
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
