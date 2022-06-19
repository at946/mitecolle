import type { NextPage, GetServerSideProps } from 'next';

type Props = {
  slides: [{ id: string; title: string; url: string; shareCount: number }];
};

const Home: NextPage<Props> = ({ slides }) => {
  return (
    <>
      <div className='section has-text-centered'>
        <div className='container'>
          <h1 className='title'>One day ranking</h1>
          <p className='help mb-2'>
            直近１日の間でシェアされたツイート数で
            <br className='is-hidden-tablet' />
            スライドのランキングを作ってみたよ
          </p>
          <a
            href='https://speakerdeck.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='tag is-rounded'
            data-testid='source_services_tag'
          >
            Speaker Deck
          </a>
        </div>
      </div>

      <div className='section has-text-centered'>
        <div className='container'>
          {slides.map((slide) => (
            <p key='slide.id' className='mb-5 has-text-left' data-testid='slide'>
              <a
                href={slide.url}
                target='_blank'
                rel='noopener noreferrer'
                className='has-text-dark has-text-weight-bold'
                data-testid='slide_title'
              >
                {slide.title}
              </a>
              <span className='tag help is-rounde is-info is-light ml-2' data-testid='slide_share_count'>
                {slide.shareCount} tweets
              </span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const res = await fetch(process.env.GET_ONE_DAY_RANKING_URL);
  const slides = await res.json();
  return {
    props: {
      slides,
    },
  };
};

export default Home;
