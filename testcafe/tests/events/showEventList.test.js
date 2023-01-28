import page from "../../utils/page_model/events";
import urls from "../../utils/functions/urls";
import getUrl from "../../utils/functions/getUrl"

fixture('events/showEventList')
  .page(urls.events)

test('イベントページで、イベントカードが表示されること', async t => {
  await t
    .expect(page.eventCards.count).eql(21)
    .expect(page.eventCard(0).eventName.innerText).eql('Sample Event 1')
    .expect(page.eventCard(0).eventLinkIcon.getAttribute('href')).eql('http://localhost:3000/hashtag1')
    .expect(page.eventCard(0).eventLinkIcon.getAttribute('target')).eql('_blank')
    .expect(page.eventCard(0).eventHashtag.innerText).eql('#hashtag1')
    .expect(page.eventCard(0).eventDate.innerText).eql('2023-01-01 ~ 2023-01-02')
    .expect(page.eventCard(0).slideCount.innerText).eql('99 slides')
    .expect(page.eventCard(1).eventName.innerText).eql('Sample Event 2')
    .expect(page.eventCard(1).eventLinkIcon.getAttribute('href')).eql('http://localhost:3000/hashtag2')
    .expect(page.eventCard(1).eventLinkIcon.getAttribute('target')).eql('_blank')
    .expect(page.eventCard(1).eventHashtag.innerText).eql('#hashtag2')
    .expect(page.eventCard(1).eventDate.innerText).eql('2023-01-02')
    .expect(page.eventCard(1).slideCount.innerText).eql('20 slides')
})

test('イベントページで、イベントカードの「スライドを見る」ボタンを選択したとき、イベントスライドページに遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.events)

  await page.clickShowSlidesLink(0)

  await t.expect(getUrl()).eql(urls.eventSlides('hashtag1'))
})