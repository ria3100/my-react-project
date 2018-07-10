import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { ArticleTemplate } from '@/components/templates'

import { articles } from '../../mock/data.js'

export default class extends React.Component {
  render() {
    const article = articles[this.props.match.params.date]
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{article.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <ArticleTemplate article={article}/>
      </Fragment>
    )
  }
}
