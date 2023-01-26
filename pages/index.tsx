import type { NextPage } from 'next';
import Link from 'next/link';
import Motion from '../components/common/motion';
import PageTitle from '../components/pageTitle';

const Home: NextPage = () => {
  return (
    <Motion>
      <PageTitle title='mitecolle' help='シェアされているスライドを集めました。' />
      <div className='section'>
        <Link href='/slides'>
          <a className='button is-primary' data-testid='slides_link_button'>
            slides
          </a>
        </Link>
      </div>
    </Motion>
  );
};

export default Home;
