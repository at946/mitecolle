import type { NextPage, GetServerSideProps } from 'next';
import { useEffect } from 'react';
import Motion from '../components/common/motion';
import PageTitle from '../components/common/pageTitle';
import KeywordSearch from '../components/slides/keywordSearch';
import Slides from '../components/slides/slides';
import Pagination from '../components/common/pagination';
import Message from '../components/common/message';
import { keyword } from '../interfaces/keyword';
import { Slide as IFSlide } from '../interfaces/slide';
import { useAppDispatch } from '../store/hook';
import { setKeyword } from '../store/keywordSlice';
import { setIsSearched } from '../store/searchStateSlice';

interface Props {
  page: number;
  maxPage: number;
  keyword: keyword;
  slides: IFSlide[];
}

const SlidesPage: NextPage<Props> = ({ page, maxPage, keyword, slides }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setKeyword(keyword));
    dispatch(setIsSearched(!!keyword));
  }, [dispatch, keyword]);

  return (
    <Motion>
      <PageTitle title='Slides' help='Twitterで今シェアされているスライドを集めました。' />
      <KeywordSearch />
      {slides.length < 1 && <Message message='スライドが見つかりませんでした。' />}
      <Slides slides={slides} />
      <Pagination page={page} maxPage={maxPage} />
    </Motion>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const queryPage: number = isNaN(Number(context.query.page)) ? 1 : Number(context.query.page);
  const keyword: keyword = !!context.query.keyword ? String(context.query.keyword) : '';
  var queryParams = `page=${queryPage}`;
  if (keyword) {
    queryParams += `&keyword=${keyword}`;
  }
  const res = await fetch(`${process.env.GET_SLIDES_URL}?${queryParams}`);
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

export default SlidesPage;
