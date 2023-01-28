import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.title = Selector('[data-testid="title"]');
    this.subtitle = Selector('[data-testid="subtitle"]');
    this.eventLink = Selector('[data-testid="event_link"]');
    this.slides = Selector('[data-testid="slide"]');
    this.slide = (slideNth) => {
      const slide = this.slides.nth(slideNth);
      return {
        title: slide.find('[data-testid="slide_title"]'),
        titleLink: slide.find('[data-testid="slide_title_link"]'),
        iframe: slide.find('[data-testid="slide_iframe"]'),
        shareButton: slide.find('[data-testid="slide_share_button"]'),
      };
    };
    this.paginationLinks = Selector('[data-testid="pagination_link"]');
    this.paginationLink = (nth) => {
      return this.paginationLinks.nth(nth);
    };
    this.paginationPrevious = Selector('[data-testid="pagination_previous"]');
    this.paginationNext = Selector('[data-testid="pagination_next"]');
  }

  async inputKeyword(keyword) {
    await t.typeText(this.keywordInput, keyword, { replace: true });
  }

  async clickKeywordSearchButton() {
    await t.click(this.keywordSearchButton);
  }

  async clickCancelKeywordSearchLink() {
    await t.click(this.cancelKeywordSearchLink);
  }

  async clickPaginationPrevious() {
    await t.click(this.paginationPrevious);
  }

  async clickPaginationNext() {
    await t.click(this.paginationNext);
  }

  async clickPagination(page) {
    await t.click(this.paginationLinks.withText(page));
  }
}

export default new Page();
