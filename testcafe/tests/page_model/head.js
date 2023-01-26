import { Selector, t } from 'testcafe'

class Head {
  constructor() {
    this.title = Selector('title')
    this.description = Selector('meta[name="description"]')
    this.ogSiteName = Selector('meta[property="og:site_name"]')
    this.ogType = Selector('meta[property="og:type"]')
    this.ogUrl = Selector('meta[property="og:url"]')
    this.ogTitle = Selector('meta[property="og:title"]')
    this.ogDescription = Selector('meta[property="og:description"]')
    this.ogImage = Selector('meta[property="og:image"]')
    this.twitterCard = Selector('meta[name="twitter:card"]')
  }
}

export default new Head()