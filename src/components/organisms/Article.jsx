import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js/lib/highlight'
import styled from 'styled-components'

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

export default class extends React.Component {
  highlightCode(code) {
    return hljs.highlightAuto(code, ['javascript']).value
    // return code
  }
  render() {
    return <Row style={style.ListRow}>
        <Col span={20} offset={2}>
          <ArticleTitle>{this.props.article.title}</ArticleTitle>
          <DateAndTags tags={this.props.article.tags} date={this.props.article.startAt} />
          <Markdown md={this.props.article.body} />
        </Col>
      </Row>
  }
}
