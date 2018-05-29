import React from 'react'
import { ArticleListItem } from '@/components/molecules'

export default class extends React.Component {
  render() {
    const items = ['aaa', 'bbb', 'ccc']
    return (
      <div>
        {items.map(item => {
          return <ArticleListItem item={item} />
        })}
      </div>
    )
  }
}
