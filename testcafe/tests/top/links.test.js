import top from '../page_model/top';
import getUrl from '../utils/getUrl';
import urls from "../utils/urls";

fixture('top/links')
.page(urls.top)

test('トップページで、スライドボタンを選択したとき、スライドページへ遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.top)

  await top.clickSlideLinkButton()

  await t.expect(getUrl()).eql(urls.slides)
})