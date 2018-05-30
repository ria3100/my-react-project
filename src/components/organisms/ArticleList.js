import React from 'react'
import { ArticleCard } from '@/components/molecules'

export default class extends React.Component {
  render() {
    const items = ['aaa', 'bbb', 'ccc']
    return (
      <div>
        {items.map(item => {
          return <ArticleCard item={item} />
        })}
      </div>
    )
  }
}
