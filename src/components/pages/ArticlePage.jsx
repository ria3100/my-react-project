import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { ArticleTemplate } from '@/components/templates'

@inject('ArticlesStore')
@observer
export default class extends React.Component {
  static propTypes = {
    ArticlesStore: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.ArticlesStore.emptyArticle
    }
  }
  componentDidMount() {
    //TODO promise.all で template 切り替えも可
    (async () => {
      this.setState({ article: await this.props.ArticlesStore.getOne('mvARWqoJqwLApPk1gv9I') })
    })()
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.article.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <ArticleTemplate article={this.state.article} />
      </Fragment>
    )
  }
}
