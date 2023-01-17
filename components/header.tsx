import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Header: NextPage = () => {
  const shareText = encodeURIComponent(process.env.SITE_URL as string);

  return (
    <nav className='navbar px-5' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <span className='navbar-item'>
            <Link href='/'>
              <Image src='/logo.svg' alt='logo' height='40' width='166' />
            </Link>
          </span>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <a
              href='https://www.buymeacoffee.com/at946'
              className='navbar-item'
              target='_blank'
              rel='noreferrer'
              data-testid='buymeacoffee'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                alt='Buy me a coffee'
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
