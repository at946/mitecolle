import { Selector, t } from 'testcafe';

class Header {
  constructor() {
    this.logo = Selector('[data-testid="header_logo"]');
    this.menu = (menuName) => Selector(`[data-testid="header_menu_${menuName}`);
  }

  async clickLogo() {
    await t.click(this.logo);
  }

  async clickMenu(menuName) {
    await t.click(this.menu(menuName));
  }
}

export default new Header();
