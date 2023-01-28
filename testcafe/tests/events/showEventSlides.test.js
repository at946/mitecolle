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