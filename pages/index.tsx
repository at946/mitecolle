import type { NextPage, GetServerSideProps } from 'next';
import RankingTitle from '../components/rankingTitle';
import Slides from '../components/slides/slides';
import Pagination from '../components/pagination';

type Props = {
  rankingType: string;
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

const Home: NextPage<Props> = ({ rankingType, page, maxPage, slides }) => {
  return (
    <>
      <RankingTitle rankingType={rankingType} />
      <Slides slides={slides} />
      <Pagination page={page} maxPage={maxPage} rankingType={rankingType} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const queryPage = context.query.page ? Number(context.query.page) : 1;
  const rankingType = ['day', 'week'].includes(String(context.query.type))
    ? String(context.query.type)
    : 'day';
  const res = await fetch(`${process.env.GET_RANKING_URL}?type=${rankingType}&page=${queryPage}`);
  const { page, maxPage, slides } = await res.json();
  return {
    props: {
      rankingType,
      page,
      maxPage,
      slides,
    },
  };
};

export default Home;
