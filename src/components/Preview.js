import React from 'react'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

const ReactMarkdown = require('react-markdown')

@inject('editor')
@observer
export default class extends React.Component {
  static propTypes = {
    editor: PropTypes.object.isRequired,
  }
  render() {
    const { editor } = this.props
    return <ReactMarkdown source={editor.md} />
  }
}
