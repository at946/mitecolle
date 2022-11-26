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

test('トップページで、キーワードを入力せずに「検索」ボタンを選択できないこと', async t => {
  await t
    .expect(page.keywordInput.value).eql('')
    .expect(page.keywordSearchButton.hasAttribute('disabled')).ok()

  await page.inputKeyword('hashtag1')

  await t
    .expect(page.keywordInput.value).eql('hashtag1')
    .expect(page.keywordSearchButton.hasAttribute('disabled')).notOk()

  await page.inputKeyword(' ')

  await t
    .expect(page.keywordInput.value).eql(' ')
    .expect(page.keywordSearchButton.hasAttribute('disabled')).ok()

  await page.inputKeyword('　')

  await t
    .expect(page.keywordInput.value).eql('　')
    .expect(page.keywordSearchButton.hasAttribute('disabled')).ok()

})

test('トップページで、キーワードを入力して「検索」ボタンを選択したとき、タイトルにもハッシュタグにもヒットするスライドがなかった場合、Not foundのメッセージが表示されること', async t => {
  await page.inputKeyword('Not found')
  await page.clickKeywordSearchButton()

  await t
    .expect(page.slides.count).eql(0)
    .expect(page.message.innerText).eql('スライドが見つかりませんでした。')
})