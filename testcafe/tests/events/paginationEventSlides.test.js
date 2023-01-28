import page from '../../utils/page_model/eventSlides';
import urls from '../../utils/functions/urls';

fixture('slides/pagination')
  .page(urls.eventSlides('hashtag1'))

test('イベントスライドページで、ページネーションできること', async t => {
  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 1')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  // query parameterでページネーション
  await t.navigateTo(`${urls.eventSlides('hashtag1')}?page=5`)

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 41')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 50')
    .expect(page.paginationLinks.count).eql(3)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).notContains('is-current')
    .expect(page.paginationLink(1).innerText).eql('5')
    .expect(page.paginationLink(1).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(2).innerText).eql('10')
    .expect(page.paginationLink(2).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).notContains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  // Nextでページネーション
  await page.clickPaginationNext()

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 51')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 60')
    .expect(page.paginationLinks.count).eql(3)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).notContains('is-current')
    .expect(page.paginationLink(1).innerText).eql('6')
    .expect(page.paginationLink(1).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(2).innerText).eql('10')
    .expect(page.paginationLink(2).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).notContains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  // ページ番号（最終ページ）クリックでページネーション
  await page.clickPagination('10')

  await t
    .expect(page.slides.count).eql(9)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 91')
    .expect(page.slide(8).title.innerText).eql('Hashtag 1 Slide 99')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).notContains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).contains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).notContains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).contains('is-disabled')

  // Previousでページネーション
  await page.clickPaginationPrevious()

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 81')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 90')
    .expect(page.paginationLinks.count).eql(3)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).notContains('is-current')
    .expect(page.paginationLink(1).innerText).eql('9')
    .expect(page.paginationLink(1).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(2).innerText).eql('10')
    .expect(page.paginationLink(2).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).notContains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  // ページ番号（1ページ）クリックでページネーション
  await page.clickPagination('1')

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 1')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

})

test('イベントスライドページで、ページ外の値がURLに付与された場合、1ページ目が表示されること', async t => {
  await t.navigateTo(`${urls.eventSlides('hashtag1')}?page=11`)

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 1')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  await t.navigateTo(`${urls.eventSlides('hashtag1')}?page=hello`)

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Hashtag 1 Slide 1')
    .expect(page.slide(9).title.innerText).eql('Hashtag 1 Slide 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')
})

test('イベントスライドページで、スライドが10枚以下のとき、ページネーションできないこと', async t => {
  await t.navigateTo(urls.eventSlides('hashtag2'))

  await t
    .expect(page.slides.count).eql(1)
    .expect(page.slide(0).title.innerText).eql('Hashtag 2 Slide 1')
    .expect(page.paginationLinks.count).eql(1)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).contains('is-disabled')
})