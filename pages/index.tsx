import type { NextPage, GetServerSideProps } from 'next';
import Pagination from '../components/pagination';
import Slide from '../components/slide';
import SourceServiceTags from '../components/sourceServiceTags';

type Props = {
  page: number;
  maxPage: number;
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

const Home: NextPage<Props> = ({ page, maxPage, slides }) => {
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
          <SourceServiceTags />
        </div>
      </div>

      <div className='section has-text-centered'>
        <div className='container'>
          {slides.map((slide) => (
            <div key={slide.id} className='section px-0'>
              <Slide
                // id={slide.id}
                id='1'
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

      <Pagination page={page} maxPage={maxPage} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const query_page = context.query.page ? Number(context.query.page) : 1;
  const res = await fetch(`${process.env.GET_ONE_DAY_RANKING_URL}?page=${query_page}`);
  const { page, maxPage, slides } = await res.json();
  return {
    props: {
      page,
      maxPage,
      slides,
    },
  };
};

export default Home;
