import { Selector, t } from 'testcafe';

class Footer {
  constructor() {
    this.copyright = Selector('[data-testid="copyright"]');
  }
}

export default new Footer();
