import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.source_services_tag = Selector('[data-testid="source_services_tag"]');
    this.slides = Selector('[data-testid="slide"]');
    this.slide = (nth) => {
      const slide = this.slides.nth(nth);
      return {
        title: slide.find('[data-testid="slide_title"]'),
        shareCount: slide.find('[data-testid="slide_share_count"]'),
      };
    };
  }
}

export default new Page();
