import type { NextPage, GetServerSideProps } from 'next';
import RankingTitle from '../components/rankingTitle';
import KeywordSearch from '../components/keywordSearch';
import Slides from '../components/slides/slides';
import Pagination from '../components/pagination';

type Props = {
  page: number;
  maxPage: number;
  slides: [
    {
      id: string;
      title: string;
      url: string;
      sharePoint: number;
      iframeSrc: string;
      width: number;
      height: number;
      hashtags: string;
    },
  ];
};

const Home: NextPage<Props> = ({ page, maxPage, slides }) => {
  return (
    <>
      <RankingTitle />
      <KeywordSearch />
      <Slides slides={slides} />
      <Pagination page={page} maxPage={maxPage} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const queryPage = context.query.page ? Number(context.query.page) : 1;
  const res = await fetch(`${process.env.GET_RANKING_URL}?page=${queryPage}`);
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
