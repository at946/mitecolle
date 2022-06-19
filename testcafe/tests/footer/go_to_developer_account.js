import footer from '../page_model/footer';
import urls from '../utils/urls';

fixture('footer/go_to_developer_account').page(urls.one_day_ranking);

test('フッターでコピーライトを選択したとき、開発者のTwitterアカウントに遷移すること', async (t) => {
  await t
    .expect(footer.copyright.innerText)
    .eql('@asato')
    .expect(footer.copyright.getAttribute('href'))
    .eql('https://twitter.com/at_946')
    .expect(footer.copyright.getAttribute('target'))
    .eql('_blank');
});
