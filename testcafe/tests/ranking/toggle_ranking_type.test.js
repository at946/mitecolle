import page from '../page_model/ranking';
import urls from '../utils/urls';

fixture('ranking/toggle_ranking_type')
  .page(urls.ranking)

test('rankingページで、ranking type toggleを選択したとき、one day/one weekを切り替えられること', async t => {
  await t
    .expect(page.title.innerText).eql('One day ranking')
    .expect(page.rankingToggleMenu('Day').getAttribute('class')).contains('is-active')
    .expect(page.rankingToggleMenu('Week').getAttribute('class')).notOk()
    .expect(page.slide(0).title.innerText).eql('One day 1')

  await page.clickRankingToggle('Week')
  
  await t.expect(page.title.innerText).eql('One week ranking')
  .expect(page.rankingToggleMenu('Day').getAttribute('class')).notOk()
  .expect(page.rankingToggleMenu('Week').getAttribute('class')).contains('is-active')
  .expect(page.slide(0).title.innerText).eql('One week 1')

  await page.clickRankingToggle('Day')

  await t
    .expect(page.title.innerText).eql('One day ranking')
    .expect(page.rankingToggleMenu('Day').getAttribute('class')).contains('is-active')
    .expect(page.rankingToggleMenu('Week').getAttribute('class')).notOk()
    .expect(page.slide(0).title.innerText).eql('One day 1')
})