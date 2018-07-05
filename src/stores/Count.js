import { observable, computed, action } from 'mobx'

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

import firebase from '../firebase'
var db = firebase.firestore()

class CountStore {
  @observable num = 0

  @computed
  get getDoubleCount() {
    return this.num * 2
  }

  @action.bound
  onIncrement() {
    this.num = this.num + 1

    db.collection('article')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, doc.data())
        })
      })
  }

  @action.bound
  onDecrement() {
    this.num = this.num - 1
  }

  @action.bound
  async onAsyncIecrement() {
    await sleep(1000)
    this.onIncrement()
  }
}
export default new CountStore()
