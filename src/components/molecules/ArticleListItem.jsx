import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { List } from 'antd'

import { DateAndTags } from '@/components/molecules'

const Title = styled.h2`
  color: #78909c;
  font-size: 1.728em;
  margin-bottom: 16px;
`

const Body = styled.div`
  line-height: 2;
  float: left;
  width: 100%;
  margin-bottom: 16px;
`

const style = {
  ListItem: {
    marginBottom: '16px',
  },
}

export default class extends React.Component {
  render() {
    console.log(this.props.item)
    return (
      <List.Item style={style.ListItem}>
        <List.Item.Meta title={<Link to="/article/0">
              {this.props.item.title}
            </Link>} description={<Fragment>
              <Body>{this.props.item.sumally}</Body>
              <DateAndTags tags={this.props.item.tags} date={this.props.item.startAt} />
            </Fragment>} />
      </List.Item>
    )
  }
}
