import { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <footer className='footer mt-auto py-5 has-background-light'>
      <div className='content has-text-centered mx-auto' style={{ maxWidth: '1000px' }}>
        <div className='buttons is-centered mb-1'>
          <Link href='/tos'>
            <a className='button is-small is-text' data-testid='link_to_tos'>
              利用規約
            </a>
          </Link>
          <Link href='/pp'>
            <a className='button is-small is-text' data-testid='link_to_pp'>
              プライバシーポリシー
            </a>
          </Link>
          <a
            href='https://twitter.com/mitecolle'
            target='_blank'
            rel='noreferrer'
            className='button is-small is-text'
            data-testid='link_to_inquiry'
          >
            お問い合わせ
          </a>
        </div>
        <a
          href='https://twitter.com/at_946'
          target='_blank'
          rel='noopener noreferrer'
          className='has-text-black'
          data-testid='copyright'
        >
          @asato
        </a>
      </div>
    </footer>
  );
};

export default Footer;
