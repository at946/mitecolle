import page from '../page_model/one_day_ranking';
import urls from '../utils/urls';

fixture('one_day_ranking/show_one_day_ranking')
  .page(urls.one_day_ranking)

test('one day rankingページで、シェア数の多い順番にスライドのタイトルとシェア数が並んでいること', async t => {
  await t
    .expect(page.slides.count).eql(10)

  await t
    .expect(page.slide(0).title.innerText).eql('Title 1')
    .expect(page.slide(0).title.getAttribute('href')).eql('http://localhost:3000/1')
    .expect(page.slide(0).title.getAttribute('target')).eql('_blank')
    .expect(page.slide(0).shareCount.innerText).eql('99 tweets')
    .expect(page.slide(0).iframe.getAttribute('src')).eql('http://localhost:3000/player/1')

  await t
    .expect(page.slide(9).title.innerText).eql('Title 10')
    .expect(page.slide(9).title.getAttribute('href')).eql('http://localhost:3000/10')
    .expect(page.slide(9).title.getAttribute('target')).eql('_blank')
    .expect(page.slide(9).shareCount.innerText).eql('90 tweets')
    .expect(page.slide(9).iframe.getAttribute('src')).eql('http://localhost:3000/player/10')
})

test('one day rankingページで、スライドのTwitterアイコンを選択したとき、Twitterにスライドをシェアできること', async t => {
  await t
    .expect(page.slide(0).shareButton.getAttribute('href')).eql(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Title 1\n\n#mitecolle\nhttp://localhost:3000/1')}`)
    .expect(page.slide(0).shareButton.getAttribute('target')).eql('_blank')

  await t
    .expect(page.slide(9).shareButton.getAttribute('href')).eql(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Title 10\n\n#mitecolle\nhttp://localhost:3000/10')}`)
    .expect(page.slide(9).shareButton.getAttribute('target')).eql('_blank')
})