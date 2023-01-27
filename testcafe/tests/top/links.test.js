import top from '../page_model/top';
import getUrl from '../utils/getUrl';
import urls from "../utils/urls";

fixture('top/links')
.page(urls.top)

test('トップページで、「Slides」ボタンを選択したとき、スライドページへ遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.top)

  await top.clickSlidesLinkButton()

  await t.expect(getUrl()).eql(urls.slides)
})

test('トップページで、「Events」ボタンを選択したとき、イベントページへ遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.top)

  await top.clickEventsLinkButton()

  await t.expect(getUrl()).eql(urls.events)
})