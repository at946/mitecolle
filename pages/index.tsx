import type { NextPage, GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import RankingTitle from '../components/rankingTitle';
import KeywordSearch from '../components/keywordSearch';
import Slides from '../components/slides/slides';
import Pagination from '../components/pagination';
import Message from '../components/message';
import { keyword } from '../interfaces/keyword';
import { Slides as IFSlides } from '../interfaces/slides';
import { useAppDispatch } from '../store/hook';
import { setKeyword } from '../store/keywordSlice';

interface Props {
  page: number;
  maxPage: number;
  keyword: keyword;
  slides: IFSlides;
}

const Home: NextPage<Props> = ({ page, maxPage, keyword, slides }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setKeyword(keyword));
  }, [dispatch, keyword]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <RankingTitle />
      <KeywordSearch />
      {slides.length < 1 && <Message message='スライドが見つかりませんでした。' />}
      <Slides slides={slides} />
      <Pagination page={page} maxPage={maxPage} />
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const queryPage = isNaN(Number(context.query.page)) ? 1 : Number(context.query.page);
  const keyword: keyword = !!context.query.keyword ? String(context.query.keyword) : '';
  var queryParams = `page=${queryPage}`;
  if (keyword) {
    queryParams += `&keyword=${keyword}`;
  }
  const res = await fetch(`${process.env.GET_RANKING_URL}?${queryParams}`);
  const { page, maxPage, slides } = await res.json();
  return {
    props: {
      page,
      maxPage,
      keyword,
      slides,
    },
  };
};

export default Home;
