import header from '../../utils/page_model/header';
import getUrl from '../../utils/functions/getUrl';
import urls from '../../utils/functions/urls';

fixture('footer/go_to_developer_account')
  .page(urls.top)

test('トップページで、ヘッダーのロゴを選択したとき、トップページにとどまること', async t => {
  await t.expect(getUrl()).eql(urls.top)

  await header.clickLogo()

  await t.expect(getUrl()).eql(urls.top)
})

test.page(urls.slides)
('トップページ以外で、ヘッダーのロゴを選択したとき、トップページに遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.slides)

  await header.clickLogo()

  await t.expect(getUrl()).eql(urls.top)
})

test('ヘッダーでサポートアイコンを選択したとき、noteの支援ページへ遷移すること', async t => {
  await t
    .expect(header.menu('support').getAttribute('href')).eql('https://note.com/_at_946/n/nc805619e4e23')
    .expect(header.menu('support').getAttribute('target')).eql('_blank')
})

test.page(urls.events)
('ヘッダーで「スライド」を選択したとき、スライドページに遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.events)

  await header.clickMenu('slides')

  await t.expect(getUrl()).eql(urls.slides)
})

test.page(urls.slides)
('ヘッダーで「イベント」を選択したとき、イベントページに遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.slides)
  
  await header.clickMenu('events')
  
  await t.expect(getUrl()).eql(urls.events)
})