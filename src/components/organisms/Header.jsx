import React, { Fragment } from 'react'
import styled from 'styled-components'

import { HeaderBgSVG } from '@/components/atoms'
import { HeaderContent } from '@/components/molecules'
import { HeaderMenu } from '@/components/organisms'

const Mainvisual = styled.div`
  position: relative;
  width: 100vw;
  margin-bottom:64px;
`

const Icon = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 60px;
  background: rgb(112, 225, 245);
  margin: 0 auto;
  &:after {
    position: absolute;
    content: '';
    width: 92px;
    height: 92px;
    display: block;
    background: url(/static/logo-icon.svg) top left / cover no-repeat;
  }
`

export default class extends React.Component {
  render() {
    let mainvisual = this.props.match.url == '/'
      ? <Mainvisual>
          <HeaderBgSVG small={false} />
          <HeaderContent small={false} />
        </Mainvisual>
      : null
    return (
      <Fragment>
        <HeaderMenu />
        {mainvisual}
      </Fragment>
    )
  }
}
