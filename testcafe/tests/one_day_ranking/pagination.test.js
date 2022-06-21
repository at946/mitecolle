import page from '../page_model/one_day_ranking';
import urls from '../utils/urls';

fixture('one_day_ranking/pagination')
  .page(urls.one_day_ranking)

test('one day rankingページで、ページネーションできること', async t => {
  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Title 1')
    .expect(page.slide(9).title.innerText).eql('Title 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  // query parameterでページネーション
  await t.navigateTo(`${urls.one_day_ranking}?page=5`)

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Title 41')
    .expect(page.slide(9).title.innerText).eql('Title 50')
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
    .expect(page.slide(0).title.innerText).eql('Title 51')
    .expect(page.slide(9).title.innerText).eql('Title 60')
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
    .expect(page.slide(0).title.innerText).eql('Title 91')
    .expect(page.slide(8).title.innerText).eql('Title 99')
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
    .expect(page.slide(0).title.innerText).eql('Title 81')
    .expect(page.slide(9).title.innerText).eql('Title 90')
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
    .expect(page.slide(0).title.innerText).eql('Title 1')
    .expect(page.slide(9).title.innerText).eql('Title 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

})

test('one day rankingページで、ページ外の数字がURLに付与された場合、1ページ目が表示されること', async t => {
  await t.navigateTo(`${urls.one_day_ranking}?page=11`)

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Title 1')
    .expect(page.slide(9).title.innerText).eql('Title 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')

  await t.navigateTo(`${urls.one_day_ranking}?page=hello`)

  await t
    .expect(page.slides.count).eql(10)
    .expect(page.slide(0).title.innerText).eql('Title 1')
    .expect(page.slide(9).title.innerText).eql('Title 10')
    .expect(page.paginationLinks.count).eql(2)
    .expect(page.paginationLink(0).innerText).eql('1')
    .expect(page.paginationLink(0).getAttribute('class')).contains('is-current')
    .expect(page.paginationLink(1).innerText).eql('10')
    .expect(page.paginationLink(1).getAttribute('class')).notContains('is-current')
    .expect(page.paginationPrevious.getAttribute('class')).contains('is-disabled')
    .expect(page.paginationNext.getAttribute('class')).notContains('is-disabled')
})