import { ReactNode } from 'react';
import MyHead from './myHead';
import Header from './header';
import Footer from './footer';
import { NextPage } from 'next';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <div className='is-flex is-flex-direction-column' style={{ minHeight: '100vh' }}>
      <MyHead />
      <Header />
      <main className='section has-text-centered'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
