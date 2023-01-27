import page from '../../utils/page_model/slides';
import urls from '../../utils/functions/urls';

fixture('slides/searchSlidesFromHashtag')
  .page(urls.slides)

test('スライドページで、スライドのハッシュタグを選択したとき、そのハッシュタグでスライドが検索されること', async t => {
  await t
    .expect(page.slides.count).eql(10)
    .expect(page.keywordInput.value).eql('')

  await t.click(page.slide(0).hashtag(0))

  await t
    .expect(page.slides.count).eql(2)
    .expect(page.keywordInput.value).eql('hashtag1')
})