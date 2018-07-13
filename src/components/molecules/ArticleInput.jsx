import React, { Fragment } from 'react'
import styled from 'styled-components'
import update from 'immutability-helper'

import { Input } from 'antd'
const { TextArea } = Input
import { Editor, TagEditor } from '@/components/atoms'

const style = {
  Row: {
    marginBottom: '16px',
  },
}

export default class extends React.Component {
  updateArticle(p, value) {
    this.props.onChange(update(this.props.article, { [p]: { $set: value } }))
  }
  render() {
    return (
      <Fragment>
        <div style={{ marginBottom: 16 }}>
          <Input placeholder="Title" value={this.props.article.title} onChange={e => {
            this.updateArticle('title', e.target.value)
            }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <TagEditor />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Editor md={this.props.article.body} onChange={value => {
              this.updateArticle('body', value)
            }} />
        </div>
      </Fragment>
    )
  }
}
