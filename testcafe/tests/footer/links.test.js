import footer from '../page_model/footer';
import getUrl from '../utils/getUrl';
import urls from '../utils/urls';

fixture('footer/go_to_developer_account')
  .page(urls.ranking)

test('フッターでコピーライトを選択したとき、開発者のTwitterアカウントに遷移すること', async t => {
  await t
    .expect(footer.copyright.innerText).eql('@asato')
    .expect(footer.copyright.getAttribute('href')).eql('https://twitter.com/at_946')
    .expect(footer.copyright.getAttribute('target')).eql('_blank')
});

test('フッターで利用規約を選択したとき、利用規約ページに遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.ranking)
  await t.click(footer.linkToToS)
  await t.expect(getUrl()).eql(urls.tos)
})

test('フッターでプライバシーポリシーを選択したとき、プライバシーポリシーページに遷移すること', async t => {
  await t.expect(getUrl()).eql(urls.ranking)
  await t.click(footer.linkToPP)
  await t.expect(getUrl()).eql(urls.pp)
})

test('フッターでお問い合わせを選択したとき、お問い合わせページに遷移すること', async t => {
  await t
    .expect(footer.linkToInquiry.getAttribute('href')).eql('https://twitter.com/mitecolle')
    .expect(footer.linkToInquiry.getAttribute('target')).eql('_blank')
})