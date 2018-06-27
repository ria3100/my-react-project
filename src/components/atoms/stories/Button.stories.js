import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../Button2'

export default class extends React.Component {
  render() {
    return <Button onClick={action('clicked')}>Hello Button</Button>
  }
}
