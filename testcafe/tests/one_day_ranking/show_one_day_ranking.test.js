import page from '../page_model/one_day_ranking';
import urls from '../utils/urls';

fixture('one_day_ranking/show_one_day_ranking').page(urls.one_day_ranking);

test('one day rankingページで、シェア数の多い順番にスライドのタイトルとシェア数が並んでいること', async (t) => {
  await t
    .expect(page.slides.count).eql(5)

  await t
    .expect(page.slide(0).title.innerText).eql('Title 1')
    .expect(page.slide(0).title.getAttribute('href')).eql('http://localhost:3000/1')
    .expect(page.slide(0).title.getAttribute('target')).eql('_blank')
    .expect(page.slide(0).shareCount.innerText).eql('100 tweets')
    .expect(page.slide(0).iframe.getAttribute('src')).eql('http://localhost:3000/player/1')

  await t
    .expect(page.slide(4).title.innerText).eql('Title 5')
    .expect(page.slide(4).title.getAttribute('href')).eql('http://localhost:3000/5')
    .expect(page.slide(4).title.getAttribute('target')).eql('_blank')
    .expect(page.slide(4).shareCount.innerText).eql('60 tweets')
    .expect(page.slide(4).iframe.getAttribute('src')).eql('http://localhost:3000/player/5')
});