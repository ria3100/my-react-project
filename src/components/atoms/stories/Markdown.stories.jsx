import React from 'react'
import { action } from '@storybook/addon-actions'
import Markdown from '../Markdown'

const md = `
aaa
bbb

\`\`\`html
<div>aaa</div>
\`\`\`

ccc
ddd

aaa
bbb

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

ccc
ddd
`

export default class extends React.Component {
  render() {
    return <Markdown md={md} />
  }
}
