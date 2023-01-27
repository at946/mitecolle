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

test('ヘッダーでbmcアイコンを選択したとき、Buy me a coffeeサイトへ遷移すること', async t => {
  await t
    .expect(header.buymeacoffee.getAttribute('href')).eql('https://www.buymeacoffee.com/at946')
    .expect(header.buymeacoffee.getAttribute('target')).eql('_blank')
})