import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { HomeTemplate } from '@/components/templates'

@inject('ArticlesStore')
@observer
export default class extends React.Component {
  static propTypes = {
    ArticlesStore: PropTypes.object.isRequired,
  }
  componentDidMount() {
    this.props.ArticlesStore.fetch()
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HomeTemplate {...this.props} />
      </Fragment>
    )
  }
}
