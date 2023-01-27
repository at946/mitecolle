import page from "../../utils/page_model/events";
import urls from "../../utils/functions/urls";

fixture('events/showEventList')
  .page(urls.events)

test('イベントページで、イベントカードが表示されること', async t => {
  await t
    .expect(page.eventCards.count).eql(21)
    .expect(page.eventCard(0).hashtag.innerText).eql('#hashtag1')
    .expect(page.eventCard(0).eventName.innerText).eql('Sample Event 1')
    .expect(page.eventCard(0).eventLinkIcon.getAttribute('href')).eql('http://localhost:3000')
    .expect(page.eventCard(0).eventLinkIcon.getAttribute('target')).eql('_blank')
    .expect(page.eventCard(0).slideCount.innerText).eql('10 slides')
    .expect(page.eventCard(11).hashtag.innerText).eql('#hashtag12')
    .expect(page.eventCard(11).eventName.innerText).eql('Sample Event 12')
    .expect(page.eventCard(11).eventLinkIcon.getAttribute('href')).eql('http://localhost:3000')
    .expect(page.eventCard(11).eventLinkIcon.getAttribute('target')).eql('_blank')
    .expect(page.eventCard(11).slideCount.innerText).eql('20 slides')
})