import page from '../page_model/ranking';
import urls from "../utils/urls";

fixture('ranking/keyword_search')
  .page(urls.ranking)

test('トップページで、キーワード検索の入力欄にキーワードを入力できること', async t => {
  await t
    .expect(page.keywordInput.value).eql('')

  await page.inputKeyword('hashtag1')

  await t
    .expect(page.keywordInput.value).eql('hashtag1')
})