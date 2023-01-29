import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.slidesLinkButton = Selector('[data-testid="slides_link_button"]');
    this.eventsLinkButton = Selector('[data-testid="events_link_button"]');
    this.aboutUsLinkButton = Selector('[data-testid="about_us_link_button"]');
  }

  async clickSlidesLinkButton() {
    await t.click(this.slidesLinkButton);
  }

  async clickEventsLinkButton() {
    await t.click(this.eventsLinkButton);
  }

  async clickAboutUsLinkButton() {
    await t.click(this.aboutUsLinkButton);
  }
}

export default new Page();
