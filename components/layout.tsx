import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='is-flex is-flex-direction-column' style={{ minHeight: '100vh' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
