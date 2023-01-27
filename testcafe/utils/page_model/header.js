import { Selector, t } from 'testcafe';

class Header {
  constructor() {
    this.logo = Selector('[data-testid="header_logo"]');
    this.buymeacoffee = Selector('[data-testid="buymeacoffee"]');
  }

  async clickLogo() {
    await t.click(this.logo)
  }
}

export default new Header();
