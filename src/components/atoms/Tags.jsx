import React from 'react'
import styled from 'styled-components'

import { Icon } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Icon type="tag" />&nbsp;
        {this.props.tags.map(item => {
          return <span>{item.text}&nbsp;</span>
        })}
      </div>
    )
  }
}
