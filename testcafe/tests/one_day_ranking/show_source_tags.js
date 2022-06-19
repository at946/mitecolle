import page from '../page_model/one_day_ranking';
import urls from '../utils/urls';

fixture('one_day_ranking/show_source_tags')
  .page(urls.one_day_ranking)

test('one day rankingページで、スライドのソースとしてSpeaker Deckがあることが表示されること', async (t) => {
  const speaker_deck_tag = await page.source_services_tag.nth(0)

  await t
    .expect(speaker_deck_tag.nth(0).innerText).eql('Speaker Deck')
    .expect(speaker_deck_tag.nth(0).getAttribute('href')).eql('https://speakerdeck.com')
    .expect(speaker_deck_tag.nth(0).getAttribute('target')).eql('_blank')
})

test('one day rankingページで、スライドのソースとしてSlideShareがあることが表示されること', async (t) => {
  const speaker_deck_tag = await page.source_services_tag.nth(0)

  await t
    .expect(speaker_deck_tag.nth(1).innerText).eql('SlideShare')
    .expect(speaker_deck_tag.nth(1).getAttribute('href')).eql('https://www.slideshare.net')
    .expect(speaker_deck_tag.nth(1).getAttribute('target')).eql('_blank')
})
