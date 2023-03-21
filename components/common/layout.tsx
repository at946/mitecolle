import { ReactNode } from 'react';
import DefaultHead from './defaultHead';
import Header from './header';
import Footer from './footer';
import { NextPage } from 'next';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <div
      className='is-flex is-flex-direction-column has-background-light'
      style={{ minHeight: '100vh' }}
    >
      <DefaultHead />
      <Header />
      <main className='has-text-centered mx-auto' style={{ maxWidth: '1000px', width: '100vw' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
