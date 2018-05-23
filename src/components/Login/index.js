import React from 'react'
import firebase from 'firebase'

const provider = new firebase.auth.TwitterAuthProvider()

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <button onClick={this.login}>twitter</button>
      </div>
    )
  }
}
