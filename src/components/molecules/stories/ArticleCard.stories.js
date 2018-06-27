import React from 'react'
import { ArticleCard } from '../'

const item = {
  title: 'aaa',
  body: 'bbb',
}

export default class extends React.Component {
  render() {
    return <ArticleCard item={item} />
  }
}
