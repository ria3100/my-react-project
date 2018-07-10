import React, { Fragment }  from 'react'
import moment from 'moment'

import { Icon } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Icon type="clock-circle-o" />&nbsp;
        {moment(this.props.date).format('YYYY-MM-DD')}
      </Fragment>
    )
  }
}
