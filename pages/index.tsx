import type { NextPage, GetStaticProps } from 'next';

type Props = {
  slides: [{ id: string, title: string, url: string }]
}

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
          <a href='https://speakerdeck.com/' target='_blank' rel='noopener noreferrer' className='tag is-rounded'>
            Speaker Deck
          </a>
        </div>
      </div>

      <div className='section has-text-centered'>
        <div className='container'>
          {slides.map((slide) => (
            <p key='slide.id' className='mb-5 has-text-left'>
              <a
                href={slide.url}
                target='_blank'
                rel='noopener noreferrer'
                className='has-text-dark has-text-weight-bold'
              >
                {slide.title}
              </a>
              <span className='tag help is-rounde is-info is-light ml-2'>{slide.shareCount} tweets</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const res = await fetch(process.env.GET_ONE_DAY_RANKING_URL);
  const slides = await res.json();
  return {
    props: {
      slides,
    },
  };
};

export default Home;
