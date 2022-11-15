import page from '../page_model/ranking';
import urls from '../utils/urls';

fixture('ranking/show_ranking')
  .page(urls.ranking)

test('one day rankingページで、シェア数の多い順番にスライドが並んでいること', async t => {
  await t
    .expect(page.slides.count).eql(10)

  await t
    .expect(page.slide(0).title.innerText).eql('One day 1')
    .expect(page.slide(0).title.getAttribute('href')).eql('http://localhost:3000/one_day/1')
    .expect(page.slide(0).title.getAttribute('target')).eql('_blank')
    .expect(page.slide(0).iframe.getAttribute('src')).eql('http://localhost:3000/player/one_day/1')
    .expect(page.slide(0).hashtag(0).innerText).eql('#hashtag1')
    .expect(page.slide(0).hashtag(1).innerText).eql('#hashtag2')

  await t
    .expect(page.slide(9).title.innerText).eql('One day 10')
    .expect(page.slide(9).title.getAttribute('href')).eql('http://localhost:3000/one_day/10')
    .expect(page.slide(9).title.getAttribute('target')).eql('_blank')
    .expect(page.slide(9).iframe.getAttribute('src')).eql('http://localhost:3000/player/one_day/10')
    .expect(page.slide(9).hashtag(0).exists).notOk()
})

test('one day rankingページで、スライドのシェアボタンを選択したとき、Twitterにスライドをシェアできること', async t => {
  await t
    .expect(page.slide(0).shareButton.getAttribute('href')).eql(`https://twitter.com/intent/tweet?text=${encodeURIComponent('One day 1\n\nvia @mitecolle\nhttp://localhost:3000/one_day/1')}`)
    .expect(page.slide(0).shareButton.getAttribute('target')).eql('_blank')

  await t
    .expect(page.slide(9).shareButton.getAttribute('href')).eql(`https://twitter.com/intent/tweet?text=${encodeURIComponent('One day 10\n\nvia @mitecolle\nhttp://localhost:3000/one_day/10')}`)
    .expect(page.slide(9).shareButton.getAttribute('target')).eql('_blank')
})