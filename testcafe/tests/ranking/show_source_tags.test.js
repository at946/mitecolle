import page from '../page_model/ranking';
import urls from '../utils/urls';

fixture('ranking/show_source_tags')
  .page(urls.ranking)

test('one day rankingページで、スライドのソースとしてSpeaker Deckがあることが表示されること', async (t) => {
  const speaker_deck_tag = await page.source_services_tag.nth(2)

  await t
    .expect(speaker_deck_tag.innerText).eql('Speaker Deck')
    .expect(speaker_deck_tag.getAttribute('href')).eql('https://speakerdeck.com')
    .expect(speaker_deck_tag.getAttribute('target')).eql('_blank')
})

test('one day rankingページで、スライドのソースとしることが表示されること', async (t) => {
  const slide_share_tag = await page.source_services_tag.nth(1)

  await t
    .expect(slide_share_tag.innerText).eql('SlideShare')
    .expect(slide_share_tag.getAttribute('href')).eql('https://www.slideshare.net')
    .expect(slide_share_tag.getAttribute('target')).eql('_blank')
})

test('one day rankingページで、スライドのソースとしてドクセルがあることが表示されること', async (t) => {
  const docswell_tag = await page.source_services_tag.nth(0)

  await t
    .expect(docswell_tag.innerText).eql('Docswell')
    .expect(docswell_tag.getAttribute('href')).eql('https://www.docswell.com')
    .expect(docswell_tag.getAttribute('target')).eql('_blank')
})
