import Image from 'next/image';

export default function Header() {
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
}
