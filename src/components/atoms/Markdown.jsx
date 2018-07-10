import React from 'react'
import ReactMarkdown from 'react-markdown'

import { CodeBlock } from '@/components/atoms'

import 'highlight.js/styles/monokai-sublime.css'

export default class extends React.Component {
  render() {
    return (
      <ReactMarkdown
        className="result"
        source={this.props.md}
        renderers={{ code: CodeBlock }}
      />
    )
  }
}
