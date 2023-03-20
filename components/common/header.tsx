import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, faImages } from '@fortawesome/free-regular-svg-icons';

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
                <FontAwesomeIcon icon={faImages} className="mr-1" />
                <span>Slides</span>
              </a>
            </Link>
            <Link href='/events'>
              <a className='navbar-item' data-testid='header_menu_events'>
                <FontAwesomeIcon icon={faCalendarCheck} className="mr-1" />
                <span>Events</span>
              </a>
            </Link>
            <a
              href='https://note.com/_at_946/n/nc805619e4e23'
              className='navbar-item'
              target='_blank'
              rel='noreferrer'
              data-testid='header_menu_support'
            >
              <FontAwesomeIcon icon={faMugHot} className="mr-1" />
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
