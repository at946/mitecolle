import { NextPage } from 'next';
import Image from 'next/image';

const Header: NextPage = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <span className='navbar-item'>
            <Image src='/logo.svg' alt='logo' height='40' width='166' />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
