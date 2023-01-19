import page from '../page_model/ranking';
import urls from '../utils/urls';

fixture('ranking/show_ranking')
  .page(urls.ranking)

test('ランキングページで、スライドのハッシュタグを選択したとき、そのハッシュタグでスライドが検索されること', async t => {
  await t
    .expect(page.slides.count).eql(10)
    .expect(page.keywordInput.value).eql('')

  await t.click(page.slide(0).hashtag(0))

  await t
    .expect(page.slides.count).eql(2)
    .expect(page.keywordInput.value).eql('hashtag1')
})