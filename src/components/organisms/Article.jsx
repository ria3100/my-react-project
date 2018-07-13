import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { inject, observer } from 'mobx-react'

import { Row, Col } from 'antd'
import { Markdown } from '@/components/atoms'
import { DateAndTags } from '@/components/molecules'

const ArticleTitle = styled.h1`
  width: 100%;
  height: 63px;
  font-size: 2em;
  margin: 0;
  border-bottom:1px solid #aaa;
  // float: left;
`

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
          <ArticleTitle>{this.props.ArticlesStore.item.title}</ArticleTitle>
          <DateAndTags
            tags={this.props.ArticlesStore.item.tags}
            date={this.props.ArticlesStore.item.startAt}
          />
          <Link to="/edit/0">編集</Link>
          <Markdown md={this.props.ArticlesStore.item.body} />
        </Col>
      </Row>
    )
  }
}
