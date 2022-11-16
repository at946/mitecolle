import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.title = Selector('[data-testid="title"]');
    this.keywordInput = Selector('[data-testid="keywordInput"]');
    this.keywordSearchButton = Selector('[data-testid="keywordSearchButton"]');
    this.slides = Selector('[data-testid="slide"]');
    this.slide = (slideNth) => {
      const slide = this.slides.nth(slideNth);
      return {
        title: slide.find('[data-testid="slide_title"]'),
        iframe: slide.find('[data-testid="slide_iframe"]'),
        shareButton: slide.find('[data-testid="slide_share_button"]'),
        hashtags: slide.find('[data-testid="hashtag"]'),
        hashtag: (hashtagNth) => { return slide.find('[data-testid="hashtag"]').nth(hashtagNth) },
      };
    };
    this.paginationLinks = Selector('[data-testid="pagination_link"]')
    this.paginationLink = (nth) => { return this.paginationLinks.nth(nth) }
    this.paginationPrevious = Selector('[data-testid="pagination_previous"]')
    this.paginationNext = Selector('[data-testid="pagination_next"]')
  }

  async inputKeyword(keyword) {
    await t.typeText(this.keywordInput, keyword, { replace: true })
  }

  async clickPaginationPrevious () {
    await t.click(this.paginationPrevious)
  }

  async clickPaginationNext () {
    await t.click(this.paginationNext)
  }
  
  async clickPagination (page) {
    await t.click(this.paginationLinks.withText(page))
  }
}

export default new Page();
