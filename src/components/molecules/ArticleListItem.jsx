import React, { Fragment } from 'react'
import styled from 'styled-components'

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
    return (
      <List.Item style={style.ListItem}>
        <List.Item.Meta
          title={
            <a href="https://ant.design"><Title>{this.props.item.title}</Title></a>
          }
          description={
            <Fragment>
              <Body>
                Ant Design, a design language for background applications, is refined by Ant UED Team Ant Design, a design language for background applications, is refined by Ant UED Team
              </Body>
              <DateAndTags tags={this.props.item.tags} date={this.props.item.startAt}/>
            </Fragment>
          }
        />
      </List.Item>
    )
  }
}
