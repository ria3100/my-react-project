import React from 'react'
import { DateAndTags } from '../'

const tags = [
  { text: 'AAA', 'path': 'aaa' },
  { text: 'BBB', 'path': 'bbb' },
]
const date = '2018/07/06 11:22:33'

export default class extends React.Component {
  render() {
    return <DateAndTags tags={tags} date={date} />
  }
}
