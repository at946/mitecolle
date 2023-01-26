import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.slidesLinkButton = Selector('[data-testid="slides_link_button"]')
  }

  async clickSlideLinkButton() {
    await t.click(this.slidesLinkButton)
  }
}

export default new Page();
