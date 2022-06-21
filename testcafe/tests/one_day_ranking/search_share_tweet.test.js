import page from '../page_model/one_day_ranking'
import urls from '../utils/urls'

fixture('one_day_ranking/search_share_tweet')
  .page(urls.one_day_ranking)

test('one day rankingページで、シェア数を選択したとき、そのスライドのシェアツイートを検索するページに遷移すること', async t => {
  await t.expect(page.slide(0).shareCount.getAttribute('href')).eql(`https://twitter.com/search?q=url:${encodeURIComponent('http://localhost:3000/1')}&f=live`)
  await t.expect(page.slide(0).shareCount.getAttribute('target')).eql('_blank')
  await t.expect(page.slide(9).shareCount.getAttribute('href')).eql(`https://twitter.com/search?q=url:${encodeURIComponent('http://localhost:3000/10')}&f=live`)
  await t.expect(page.slide(9).shareCount.getAttribute('target')).eql('_blank')
})