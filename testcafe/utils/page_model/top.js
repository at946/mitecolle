import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.slidesLinkButton = Selector('[data-testid="slides_link_button"]');
    this.eventsLinkButton = Selector('[data-testid="events_link_button"]');
  }

  async clickSlidesLinkButton() {
    await t.click(this.slidesLinkButton);
  }

  async clickEventsLinkButton() {
    await t.click(this.eventsLinkButton);
  }
}

export default new Page();
