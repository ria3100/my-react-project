import React from 'react'

import { Card } from 'antd'

// https://uigradients.com/#Jonquil
const style = {
  card: {
    background: 'linear-gradient(to right, #ffd194, #70e1f5)',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
  },
}


export default class extends React.Component {
  render() {
    return <Card style={style.card}>
      <p>
        Card content<br/>
        Card content<br />
        Card content
      </p>
    </Card>
  }
}
