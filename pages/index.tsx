import type { NextPage, GetServerSideProps } from 'next';
import Slide from '../components/slide';

type Props = {
  slides: [
    {
      id: string;
      title: string;
      url: string;
      shareCount: number;
      iframeSrc: string;
      width: number;
      height: number;
    },
  ];
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
            <div key={slide.id} className='section px-0'>
              <Slide
                id={slide.id}
                title={slide.title}
                url={slide.url}
                shareCount={slide.shareCount}
                iframeSrc={slide.iframeSrc}
                width={slide.width}
                height={slide.height}
              />
            </div>
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
