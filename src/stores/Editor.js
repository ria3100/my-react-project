import { observable, action, computed } from 'mobx'

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

export default class {
  @observable current = 0
  @observable md = 'aaa'

  // @computed
  // get getDoubleCount() {
  //   return this.current * 2
  // }

  @action.bound
  onNext() {
    this.current = this.current + 1
  }

  @action.bound
  onPrev() {
    this.current = this.current - 1
  }

  // @action.bound
  // onInputMd(md) {
  //   this.md = md
  // }
}
