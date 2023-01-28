import page from '../../utils/page_model/eventSlides';
import urls from '../../utils/functions/urls';

fixture('events/showEventSlides')
  .page(urls.eventSlides('hashtag1'))

test('イベントスライドページで、そのイベントの情報が表示されていること', async t => {
  await t
    .expect(page.title.innerText).eql('Sample Event 1')
    .expect(page.subtitle.innerText).eql('#hashtag1')
    .expect(page.eventLink.getAttribute('href')).eql('http://localhost:3000/hashtag1')
    .expect(page.eventLink.getAttribute('target')).eql('_blank')
})

test('イベントスライドページで、そのイベントのスライドが1ページ最大10スライドで表示されていること', async t => {
  await t
    .expect(page.slides.count).eql(10)

  await t
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 1')
    .expect(page.slide(0).titleLink.getAttribute('href')).eql('http://localhost:3000/hashtag1/slide1')
    .expect(page.slide(0).titleLink.getAttribute('target')).eql('_blank')
    .expect(page.slide(0).iframe.getAttribute('src')).eql('http://localhost:3000/player/hashtag1/slide1')

  await t
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 10')
    .expect(page.slide(9).titleLink.getAttribute('href')).eql('http://localhost:3000/hashtag1/slide10')
    .expect(page.slide(9).titleLink.getAttribute('target')).eql('_blank')
    .expect(page.slide(9).iframe.getAttribute('src')).eql('http://localhost:3000/player/hashtag1/slide10')
})