import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header: NextPage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav
      className='navbar has-background-light px-5'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container mx-auto' style={{ maxWidth: '1000px' }}>
        <div className='navbar-brand'>
          <span className='navbar-item'>
            <Link href='/'>
              <Image src='/logo.svg' alt='logo' height='40' width='166' data-testid='header_logo' />
            </Link>
          </span>

          <a
            role='button'
            className={`navbar-burger ${menuIsOpen && 'is-active'}`}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbar_menu'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbar_menu' className={`navbar-menu ${menuIsOpen && 'is-active'}`}>
          <div className='navbar-end'>
            <Link href='/slides'>
              <a className='navbar-item' data-testid='header_menu_slides'>
                Slides
              </a>
            </Link>
            <Link href='/events'>
              <a className='navbar-item' data-testid='header_menu_events'>
                Events
              </a>
            </Link>
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
