import type { NextPage } from 'next';
import Motion from '../components/common/motion';
import PageTitle from '../components/common/pageTitle';
import LinkButton from '../components/top/linkButton';

const Home: NextPage = () => {
  return (
    <Motion>
      <PageTitle title='mitecolle' help='シェアされているスライドを集めました。' />
      <div className='section buttons is-justify-content-center'>
        <LinkButton text='Slides' href='/slides' testid='slides_link_button' />
        <LinkButton text='Events' href='/events' testid='events_link_button' />
      </div>
    </Motion>
  );
};

export default Home;
