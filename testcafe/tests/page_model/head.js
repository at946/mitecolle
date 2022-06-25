import { Selector } from 'testcafe'

class Head {
  constructor() {
    this.title = Selector('title')
  }
}

export default new Head()