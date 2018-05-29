import React from 'react'

import { Input } from 'antd'
const { TextArea } = Input

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('editor')
@observer
export default class extends React.Component {
  static propTypes = {
    editor: PropTypes.object.isRequired,
  }
  handleChange(e) {
    console.log(e.target.value)
    // this.props.editor.md = e.target.value
  }
  render() {
    const { editor } = this.props
    return (
      <TextArea
        value={editor.md}
        onChange={e => {
          editor.md = e.target.value
        }}
      />
    )
  }
}
