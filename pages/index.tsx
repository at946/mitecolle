import type { NextPage } from 'next';
import Motion from '../components/common/motion';
import PageTitle from '../components/common/pageTitle';
import LinkButton from '../components/top/linkButton';

const Home: NextPage = () => {
  return (
    <Motion>
      <PageTitle title='mitecolle' help='シェアされているスライドを集めました。' />
      <section className='section buttons is-justify-content-center'>
        <LinkButton
          text='Slides'
          href='/slides'
          addClass='is-primary is-outlined'
          testid='slides_link_button'
        />
        <LinkButton
          text='Events'
          href='/events'
          addClass='is-primary is-outlined'
          testid='events_link_button'
        />
      </section>
      <section className='section buttons is-justify-content-center'>
        <LinkButton
          text='About us'
          href='/about'
          addClass='is-ghost'
          testid='about_us_link_button'
        />
      </section>
    </Motion>
  );
};

export default Home;
