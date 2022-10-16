import { NextPage } from 'next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';

const Header: NextPage = () => {
  const shareText = encodeURIComponent(process.env.SITE_URL as string);
  
  return (
    <nav className='navbar px-5' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <span className='navbar-item'>
            <Image src='/logo.svg' alt='logo' height='40' width='166' />
          </span>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}`}
              className={`${styles.twitter} navbar-item`}
              target='_blank'
              rel='noreferrer'
              data-testid='shareTwitter'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href='https://www.buymeacoffee.com/at946'
              target='_blank'
              rel='noreferrer'
              className={`${styles.buymeacoffee} navbar-item`}
              data-testid='buymeacoffee'
            >
              <FontAwesomeIcon icon={faMugSaucer} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
