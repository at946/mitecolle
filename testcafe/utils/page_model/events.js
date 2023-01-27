import { Selector, t } from 'testcafe';

class Events {
  constructor() {
    this.eventCards = Selector('[data-testid="event_card"]');
    this.eventCard = (nth) => {
      const eventCard = this.eventCards.nth(nth);
      return {
        hashtag: eventCard.find('[data-testid="event_hashtag"]'),
        eventName: eventCard.find('[data-testid="event_name"]'),
        eventLinkIcon: eventCard.find('[data-testid="event_link_icon"]'),
        slideCount: eventCard.find('[data-testid="slide_count"]'),
        showSlidesLink: eventCard.find('[data-testid="show_slides_link"]'),
      };
    };
  }

  async clickShowSlidesLink(nth) {
    await t.click(this.eventCard(nth).showSlidesLink);
  }
}

export default new Events();
