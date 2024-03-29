import page from '../../utils/page_model/slides';
import urls from "../../utils/functions/urls";

fixture('slides/searchSlidesFromKeyword')
  .page(urls.slides)

test('スライドページで、キーワード検索の入力欄にキーワードを入力できること', async t => {
  await t
    .expect(page.keywordInput.value).eql('')

  await page.inputKeyword('hashtag1')

  await t
    .expect(page.keywordInput.value).eql('hashtag1')
})

test('スライドページで、キーワードを入力せずに「検索」ボタンを選択できないこと', async t => {
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

test('スライドページで、キーワードを入力して「検索」ボタンを選択したとき、タイトルにもハッシュタグにもヒットするスライドがなかった場合、Not foundのメッセージが表示されること', async t => {
  await page.inputKeyword('Not found')
  await page.clickKeywordSearchButton()

  await t
    .expect(page.slides.count).eql(0)
    .expect(page.message.innerText).eql('スライドが見つかりませんでした。')
})

test('スライドページで、キーワードを入力して「検索」ボタンを選択したとき、タイトルかハッシュタグにヒットするスライドがあった場合、ヒットしたスライドだけが表示されること', async t => {
  await page.inputKeyword('hashtag')
  await page.clickKeywordSearchButton()

  await t
    .expect(page.slides.count).eql(3)
    .expect(page.slide(0).title.innerText).eql('One day 1')
    .expect(page.slide(2).title.innerText).eql('One day 3')
})

test('スライドページで、キーワード検索でスライドが絞り込まれているとき、11以上のスライドがヒットした場合、ページネーションが正しく機能すること', async t => {
  await page.inputKeyword('5')
  await page.clickKeywordSearchButton()

  await t
    .expect(page.keywordInput.value).eql('5')
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).contains('5')
    .expect(page.slide(9).title.innerText).contains('5')
    .expect(page.paginationLinks.count).eql(2)

  await page.clickPaginationNext()

  await t
    .expect(page.keywordInput.value).eql('5')
    .expect(page.slides.count).eql(9)
    .expect(page.slide(0).title.innerText).contains('5')
    .expect(page.slide(8).title.innerText).contains('5')
    .expect(page.paginationLinks.count).eql(2)

  await page.clickPaginationPrevious()

  await t
    .expect(page.keywordInput.value).eql('5')
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).contains('5')
    .expect(page.slide(9).title.innerText).contains('5')
    .expect(page.paginationLinks.count).eql(2)
})

test('ランキングページで、キーワード検索中のとき、検索解除リンクを選択したとき、キーワード検索が解除されること', async t => {
  await t.expect(page.cancelKeywordSearchLink.exists).notOk()

  await page.inputKeyword('hashtag')
  await page.clickKeywordSearchButton()

  await t
    .expect(page.keywordInput.value).eql('hashtag')
    .expect(page.slides.count).eql(3)
    .expect(page.cancelKeywordSearchLink.exists).ok()

  await page.clickCancelKeywordSearchLink()

  await t
    .expect(page.keywordInput.value).eql('')
    .expect(page.slides.count).eql(10)
    .expect(page.cancelKeywordSearchLink.exists).notOk()
})