import page from '../page_model/one_day_ranking'
import urls from '../utils/urls'

fixture('one_day_ranking/show_source_tags')
  .page(urls.one_day_ranking)

test('one day rankingページで、スライドのソースとしてSpeaker Deckがあることが表示されること', async t => {
  const speaker_deck_tag = await page.source_services_tag.nth(0)

  await t
    .expect(speaker_deck_tag.innerText).eql('Speaker Deck')
    .expect(speaker_deck_tag.getAttribute('href')).eql('https://speakerdeck.com/')
    .expect(speaker_deck_tag.getAttribute('target')).eql('_blank')
})