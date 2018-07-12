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
  constructor(props) {
    super(props)
    this.state = {
      articleList: []
    }
  }
  componentDidMount() {
    //TODO promise.all で template 切り替えも可
    (async () => {
      this.setState({ articleList: await this.props.ArticlesStore.getList() })
    })()
  }
  render() {
    const page = this.props.match.url == '/' ? 'top' : 'list'
    return <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HomeTemplate page={page} articles={this.state.articleList} />
      </Fragment>
  }
}
