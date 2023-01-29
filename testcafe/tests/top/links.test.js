import top from '../../utils/page_model/top';
import getUrl from '../../utils/functions/getUrl';
import urls from "../../utils/functions/urls";

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

test('トップページで、「About us」ボタンを選択したとき、Aboutページへ遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.top)

  await top.clickAboutUsLinkButton()

  await t.expect(getUrl()).eql(urls.about)
})