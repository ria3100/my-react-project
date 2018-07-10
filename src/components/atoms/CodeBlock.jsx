import React, { Fragment } from 'react'
import styled from 'styled-components'
import hljs from 'highlight.js/lib/'

import 'highlight.js/styles/monokai-sublime.css'

const CodeBlock = styled.pre`
  border-radius: 2px;
`

const LineNumbers = styled.code`
  float: left;
  border-right: 2px solid #464741;
  text-align: right;
  min-width: 14px;
  user-select: none;
`

const FileName = styled.div`
  width: 100%;
  float: left;
  background: #363731;
  color: #f8f8f2;
  line-height:1em;
  padding: 8px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }
  setRef(el) {
    this.codeEl = el
  }
  highlightCode() {
    hljs.highlightBlock(this.codeEl)
  }
  getLineRows() {
  }
  componentDidMount() {
    this.highlightCode()
  }
  componentDidUpdate() {
    this.highlightCode()
  }
  render() {
    const numbers = []
    for (let i = 1; i <= this.props.value.match(/\n/g).length + 1; i++) {
      numbers.push(<Fragment key={i}>{i}<br /></Fragment>)
    }
    const lineNumbers = numbers.length > 3 ?
      <LineNumbers className="hljs hljs-line-numbers">{numbers}</LineNumbers> : null

    const file = this.props.language.split(':')[1]
    const fileName = file ? <FileName>{file}</FileName> : null

    return (
      <CodeBlock>
        {fileName}
        {lineNumbers}
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </CodeBlock>
    )
  }
}

