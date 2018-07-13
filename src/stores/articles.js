import { observable, computed, action } from 'mobx'
import _ from 'lodash'
// import { asyncComputed } from 'computed-async-mobx'

import firebase from '../firebase'
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
// db.enablePersistence()

class ArticlesStore {
  @observable cache = {}
  @observable articleIds = []
  @observable currentPage = 0
  @observable totalCount
  @observable pageNum = 8
  @observable id = ''
  @observable
  emptyItem = {
    title: '',
    body: '',
    startAt: '',
    tags: '',
  }

  @computed
  get list() {
    console.log('list')
    return this.articleIds
      .slice(this.currentPage, this.currentPage + this.pageNum + 1)
      .map(id => {
        return this.cache[id]
      })
  }

  @computed
  get item() {
    console.log('item')
    return this.cache.hasOwnProperty(this.id)
      ? this.cache[this.id]
      : this.emptyItem
  }

  @action.bound
  pageChange(a, b) {
    console.log(a, b)
    // this.props.ArticlesStore.next()
  }

  @action.bound
  async fetchTotalCount() {
    await db
      .collection('articles')
      .get()
      .then(snap => {
        this.totalCount = snap.size
      })
    return
  }

  @action.bound
  async fetch() {
    await this.fetchTotalCount()
    if (this.totalCount == 0) return

    await db
      .collection('articles')
      .orderBy('startAt', 'desc')
      .limit(this.pageNum)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.cache[doc.id] = doc.data()
          this.articleIds.push(doc.id)
          console.log(doc.id)
        })
        // this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
      })
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
  }

  @action.bound
  async getOne(id) {
    this.id = id

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
}

export default new ArticlesStore()
