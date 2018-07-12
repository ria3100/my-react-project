import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Icon } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Icon type="tag" />&nbsp;
        {/* {this.props.tags.map(item => {
          return (
            <Fragment key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Fragment>
          )
        })} */}
      </Fragment>
    )
  }
}
