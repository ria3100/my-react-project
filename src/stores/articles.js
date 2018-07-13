import { observable, computed, action } from 'mobx'
// import { asyncComputed } from 'computed-async-mobx'

import firebase from '../firebase'
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
db.enablePersistence()

class ArticlesStore {
  @observable cache = {}
  @observable emptyArticle = {}
  @observable currentPage = []
  @observable nextPage = []
  @observable totalCount = 0

  // constructor() {
  //   this.cache = {}
  //   this.emptyArticle = {
  //     title: '',
  //     body: '',
  //   }
  // }

  @action.bound
  async getFirstPage() {
    await db
      .collection('articles')
      .get()
      .then(snap => {
        this.totalCount = snap.size
      })

    if (this.totalCount == 0) return

    await db
      .collection('articles')
      .orderBy('startAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log('c', doc.id)
          this.cache[doc.id] = doc.data()
          this.currentPage.push(doc.id)
        })
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })

    db.collection('articles')
      .orderBy('startAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log('n', doc.id)
          this.cache[doc.id] = doc.data()
          this.nextPage.push(doc.id)
        })
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })

    return this.currentPage.map(id => {
      return this.cache[id]
    })
  }

  @action.bound
  async getNextPage() {
    this.currentPage = this.nextPage

    await db
      .collection('articles')
      .get()
      .then(snap => {
        this.totalCount = snap.size
      })

    db.collection('articles')
      .orderBy('startAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.cache[doc.id] = doc.data()
          this.nextPage.push(doc.id)
        })
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })

    return this.currentPage.map(id => {
      return this.cache[id]
    })
  }

  @action.bound
  async getList() {
    let ret = []

    await db
      .collection('articles')
      .orderBy('startAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.cache[doc.id] = doc.data()
          ret.push(doc.data())
        })
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })

    return ret
  }

  @action.bound
  async getOne(id) {
    if (!this.cache.hasOwnProperty(id)) {
      const docRef = db.collection('articles').doc(id)
      await docRef
        .get()
        .then(doc => {
          if (doc.exists) {
            this.cache[doc.id] = doc.data()
          } else {
            console.log('No such document!')
          }
        })
        .catch(error => {
          console.log('Error getting document:', error)
        })
    }

    return this.cache[id]
  }
}

export default new ArticlesStore()
