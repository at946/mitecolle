import page from '../page_model/ranking'
import urls from '../utils/urls'

fixture('ranking/search_share_tweet')
  .page(urls.ranking)

test('one day rankingページで、シェア数を選択したとき、そのスライドのシェアツイートを検索できること', async t => {
  await t.expect(page.slide(0).shareCount.getAttribute('href')).eql(`https://twitter.com/search?q=url:${encodeURIComponent('http://localhost:3000/one_day/1')}&f=live`)
  await t.expect(page.slide(0).shareCount.getAttribute('target')).eql('_blank')
  await t.expect(page.slide(9).shareCount.getAttribute('href')).eql(`https://twitter.com/search?q=url:${encodeURIComponent('http://localhost:3000/one_day/10')}&f=live`)
  await t.expect(page.slide(9).shareCount.getAttribute('target')).eql('_blank')
})