import { observable, computed, action } from 'mobx'
// import { asyncComputed } from 'computed-async-mobx'

import firebase from '../firebase'
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

class ArticlesStore {
  @observable emptyArticle

  constructor() {
    this.emptyArticle = {
      title: '',
      body: '',
    }
  }

  @action.bound
  async getOne() {
    let tmp
    await db
      .collection('articles')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          tmp = doc.data()
        })
      })
    return tmp
  }
}

export default new ArticlesStore()
