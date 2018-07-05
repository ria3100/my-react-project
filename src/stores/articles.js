import { observable, computed, action } from 'mobx'

// import firebase from '../firebase'
// var db = firebase.firestore()

class ArticlesStore {
  @observable list = []

  // @computed
  // get getDoubleCount() {
  //   return this.articles
  // }

  // TODO アロー関数
  @action.bound
  onIncrement() {
    const self = this
    // db.collection('article')
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       self.list = doc
    //     })
    //   })
  }

  // @action.bound
  // onDecrement() {
  //   this.articles = this.articles - 1
  // }

  // @action.bound
  // async onAsyncIecrement() {
  //   await sleep(1000)
  //   this.onIncrement()
  // }
}

export default new ArticlesStore()
