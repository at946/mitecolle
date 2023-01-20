import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.title = Selector('[data-testid="title"]');
    this.keywordInput = Selector('[data-testid="keyword_input"]');
    this.keywordSearchButton = Selector('[data-testid="keyword_search_button"]');
    this.cancelKeywordSearchLink = Selector('[data-testid="cancel_keyword_search_link"]');
    this.message = Selector('[data-testid="message"]');
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

  async clickKeywordSearchButton() {
    await t.click(this.keywordSearchButton)
  }

  async clickCancelKeywordSearchLink() {
    await t.click(this.cancelKeywordSearchLink)
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
