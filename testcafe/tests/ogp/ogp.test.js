import head from "../../utils/page_model/head";
import urls from "../../utils/functions/urls";

fixture('ogp')

test.page(urls.top)
('トップページのmetatagsが正しいこと', async t => {

  const description = 'mitecolle（みてこれ）は、Twitterでシェアされている今話題のスライドを展覧しているウェブアプリです。\n'
                      + 'Docswell（ドクセル）、SlideShare、Speaker Deckで公開されているスライドを紹介しています。\n'
                      + '注目度の高いスライドでインプットの質が高まります！勉強になる！学びになる！'
  
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

  const description = 'mitecolle（みてこれ）は、Twitterでシェアされている今話題のスライドを展覧しているウェブアプリです。\n'
                      + 'Docswell（ドクセル）、SlideShare、Speaker Deckで公開されているスライドを紹介しています。\n'
                      + '注目度の高いスライドでインプットの質が高まります！勉強になる！学びになる！'
  
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