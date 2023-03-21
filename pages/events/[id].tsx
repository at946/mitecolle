import { GetServerSideProps, NextPage } from 'next';
import { Event } from '../../interfaces/event';
import { Slide } from '../../interfaces/slide';
import Motion from '../../components/common/motion';
import PageTitle from '../../components/common/pageTitle';
import Slides from '../../components/slides/slides';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../components/common/pagination';
import Head from 'next/head';

interface Props {
  event: Event;
  slides: Slide[];
  page: number;
  maxPage: number;
}

const EventSlides: NextPage<Props> = ({ event, slides, page, maxPage }) => {
  const title: string = `${event.name} (#${event.hashtag}) - mitecolle`;
  const description: string =
    `${event.name}（#${event.hashtag}）のスライドを一挙にまとめています！` +
    'イベントに参加した方も、参加できなかった人も、mitecolleでスライドをチェックして、知識をアップデートしましょう！';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key='description' name='description' content={description} />
        <meta key='og:title' property='og:title' content={title} />
        <meta key='og:description' property='og:description' content={description} />
      </Head>
      <Motion>
        <PageTitle title={event.name} help={`#${event.hashtag}`} />

        <a href={event.url} target='_blank' rel='noopener noreferrer' data-testid='event_link'>
          <span>イベントページ</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
        </a>

        <Slides slides={slides} shareHashtags={event.hashtag} />

        <Pagination page={page} maxPage={maxPage} />
      </Motion>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const eventId: string = String(context.query.id);
  const queryPage: number = isNaN(Number(context.query.page)) ? 1 : Number(context.query.page);
  const res = await fetch(`${process.env.GET_EVENT_URL}?id=${eventId}&page=${queryPage}`);
  const data = await res.json();
  return {
    props: {
      event: data.event,
      slides: data.slides,
      page: data.page,
      maxPage: data.maxPage,
    },
  };
};

export default EventSlides;
