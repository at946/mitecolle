import type { GetServerSideProps, NextPage } from 'next';
import { Event } from '../../interfaces/event';
import Motion from '../../components/common/motion';
import PageTitle from '../../components/common/pageTitle';
import Events from '../../components/events/events';

interface Props {
  events: Event[];
}

const History: NextPage<Props> = ({ events }) => {
  return (
    <Motion>
      <PageTitle title='Events' help='イベントのスライドをハッシュタグから集めました。' />
      <Events events={events} />
    </Motion>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const res = await fetch(process.env.GET_EVENTS_URL);
  const { events } = await res.json();
  return {
    props: { events },
  };
};

export default History;
