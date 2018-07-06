import React from 'react'
import { action } from '@storybook/addon-actions'
import Tags from '../Tags'

const tags = [
  { text: 'AAA', 'path': 'aaa' },
  { text: 'BBB', 'path': 'bbb' },
]

export default class extends React.Component {
  render() {
    return <Tags tags={tags}/>
  }
}
