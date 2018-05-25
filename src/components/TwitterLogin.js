import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item
import { Row, Col } from 'antd'
import firebase from 'firebase'

export default class extends React.Component {
  constructor(props) {
    super(props)

    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        console.log(result)
        if (result.credential) {
          var token = result.credential.accessToken
          var secret = result.credential.secret
        }
        var user = result.user
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        var email = error.email
        var credential = error.credential
      })
  }

  handleSubmit = () => {
    console.log('twitter login')
    var provider = new firebase.auth.TwitterAuthProvider()
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        firebase.auth().signInWithRedirect(provider)
      })
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={this.handleSubmit}
          >
            Twitter Log in
          </Button>
        </Col>
      </Row>
    )
  }
}
