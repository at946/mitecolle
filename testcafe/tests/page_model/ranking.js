import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.title = Selector('[data-testid="title"]')
    this.rankingToggle = Selector('[data-testid="ranking_toggle"]')
    this.rankingToggleMenu = (type) => {
      return this.rankingToggle.find('[data-testid="ranking_toggle_menu"]').withText(type)
    }
    this.source_services_tag = Selector('[data-testid="source_service_tag"]');
    this.slides = Selector('[data-testid="slide"]');
    this.slide = (nth) => {
      const slide = this.slides.nth(nth);
      return {
        title: slide.find('[data-testid="slide_title"]'),
        shareCount: slide.find('[data-testid="slide_share_count"]'),
        iframe: slide.find('[data-testid="slide_iframe"]'),
        shareButton: slide.find('[data-testid="slide_share_button"]'),
      };
    };
    this.paginationLinks = Selector('[data-testid="pagination_link"]')
    this.paginationLink = (nth) => { return this.paginationLinks.nth(nth) }
    this.paginationPrevious = Selector('[data-testid="pagination_previous"]')
    this.paginationNext = Selector('[data-testid="pagination_next"]')
  }

  async clickRankingToggle (type) {
    await t.click(this.rankingToggleMenu(type))
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
