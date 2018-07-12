import { observable, computed, action } from 'mobx'
// import { asyncComputed } from 'computed-async-mobx'

import firebase from '../firebase'
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
db.enablePersistence()

class ArticlesStore {
  @observable emptyArticle

  constructor() {
    this.emptyArticle = {
      title: '',
      body: '',
    }
  }

  @action.bound
  async getList() {
    let ret = []

    await db
      .collection('articles')
      .orderBy('startAt', 'desc')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          ret.push(doc.data())
        })
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })

    return ret
  }

  @action.bound
  async getOne(id) {
    let ret

    const docRef = db.collection('articles').doc(id)
    await docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          ret = doc.data()
        } else {
          console.log('No such document!')
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error)
      })

    return ret
  }
}

export default new ArticlesStore()
