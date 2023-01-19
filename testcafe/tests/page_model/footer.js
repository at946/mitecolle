import { Selector, t } from 'testcafe';

class Footer {
  constructor() {
    this.linkToToS = Selector('[data-testid="link_to_tos"]');
    this.linkToPP = Selector('[data-testid="link_to_pp"]');
    this.linkToInquiry = Selector('[data-testid="link_to_inquiry"]');
    this.copyright = Selector('[data-testid="copyright"]');
  }
}

export default new Footer();
