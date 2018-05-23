import React from 'react'
import { Helmet } from 'react-helmet'

import firebase from 'firebase'

import { Header, Login } from '../../components'

import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

export default class extends React.Component {
  render() {
    ;<div>
      <h2>login</h2>
      <Login />
    </div>
  }
}
