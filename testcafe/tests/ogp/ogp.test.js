import head from "../../utils/page_model/head";
import urls from "../../utils/functions/urls";

fixture('ogp')

const description = 'mitecolleは、今話題のスライドを一挙にまとめたウェブアプリです。Docswell、SlideShare、Speaker Deckで公開されている注目度の高いスライドを厳選して紹介し、インプットの質を高めます。ビジネスや学習など、様々な場面で役立ちます。今すぐmitecolleで学びを深めましょう！'

test.page(urls.top)
('トップページのmetatagsが正しいこと', async t => {  
  await t
    .expect(head.title.innerText).eql('mitecolle')
    .expect(head.description.getAttribute('content')).eql(description)
    .expect(head.ogSiteName.getAttribute('content')).eql('mitecolle')
    .expect(head.ogType.getAttribute('content')).eql('website')
    .expect(head.ogUrl.getAttribute('content')).eql('http://localhost:3000')
    .expect(head.ogTitle.getAttribute('content')).eql('mitecolle')
    .expect(head.ogDescription.getAttribute('content')).eql(description)
    .expect(head.ogImage.getAttribute('content')).eql('http://localhost:3000/ogp.png')
    .expect(head.twitterCard.getAttribute('content')).eql('summary_large_image')
})

test.page(urls.slides)
('スライドページのmetatagsが正しいこと', async t => {
  await t
    .expect(head.title.innerText).eql('Slides - mitecolle')
    .expect(head.description.getAttribute('content')).eql(description)
    .expect(head.ogSiteName.getAttribute('content')).eql('mitecolle')
    .expect(head.ogType.getAttribute('content')).eql('website')
    .expect(head.ogUrl.getAttribute('content')).eql('http://localhost:3000')
    .expect(head.ogTitle.getAttribute('content')).eql('Slides - mitecolle')
    .expect(head.ogDescription.getAttribute('content')).eql(description)
    .expect(head.ogImage.getAttribute('content')).eql('http://localhost:3000/ogp.png')
    .expect(head.twitterCard.getAttribute('content')).eql('summary_large_image')
})

test.page(urls.events)
('イベント一覧ページのmetatagsが正しいこと', async t => {
  await t
    .expect(head.title.innerText).eql('Events - mitecolle')
    .expect(head.description.getAttribute('content')).eql(description)
    .expect(head.ogSiteName.getAttribute('content')).eql('mitecolle')
    .expect(head.ogType.getAttribute('content')).eql('website')
    .expect(head.ogUrl.getAttribute('content')).eql('http://localhost:3000')
    .expect(head.ogTitle.getAttribute('content')).eql('Events - mitecolle')
    .expect(head.ogDescription.getAttribute('content')).eql(description)
    .expect(head.ogImage.getAttribute('content')).eql('http://localhost:3000/ogp.png')
    .expect(head.twitterCard.getAttribute('content')).eql('summary_large_image')
})

test.page(urls.eventSlides('hashtag1'))
('イベントページのmetatagsが正しいこと', async t => {
  const descriptionsOfEventPage = [
    'Sample Event 1（#hashtag1）のスライドを一挙にまとめています！イベントに参加した方も、参加できなかった人も、mitecolleでスライドをチェックして、知識をアップデートしましょう！',
    'Sample Event 2（#hashtag2）のスライドを一挙にまとめています！イベントに参加した方も、参加できなかった人も、mitecolleでスライドをチェックして、知識をアップデートしましょう！'
  ]

  await t
    .expect(head.title.innerText).eql('Sample Event 1 (#hashtag1) - mitecolle')
    .expect(head.description.getAttribute('content')).eql(descriptionsOfEventPage[0])
    .expect(head.ogSiteName.getAttribute('content')).eql('mitecolle')
    .expect(head.ogType.getAttribute('content')).eql('website')
    .expect(head.ogUrl.getAttribute('content')).eql('http://localhost:3000')
    .expect(head.ogTitle.getAttribute('content')).eql('Sample Event 1 (#hashtag1) - mitecolle')
    .expect(head.ogDescription.getAttribute('content')).eql(descriptionsOfEventPage[0])
    .expect(head.ogImage.getAttribute('content')).eql('http://localhost:3000/ogp.png')
    .expect(head.twitterCard.getAttribute('content')).eql('summary_large_image')

  await t.navigateTo(urls.eventSlides('hashtag2'))

  await t
  .expect(head.title.innerText).eql('Sample Event 2 (#hashtag2) - mitecolle')
  .expect(head.description.getAttribute('content')).eql(descriptionsOfEventPage[1])
  .expect(head.ogSiteName.getAttribute('content')).eql('mitecolle')
  .expect(head.ogType.getAttribute('content')).eql('website')
  .expect(head.ogUrl.getAttribute('content')).eql('http://localhost:3000')
  .expect(head.ogTitle.getAttribute('content')).eql('Sample Event 2 (#hashtag2) - mitecolle')
  .expect(head.ogDescription.getAttribute('content')).eql(descriptionsOfEventPage[1])
  .expect(head.ogImage.getAttribute('content')).eql('http://localhost:3000/ogp.png')
  .expect(head.twitterCard.getAttribute('content')).eql('summary_large_image')
})