import { GetServerSideProps, NextPage } from 'next';
import { Event } from '../../interfaces/event';
import { Slide } from '../../interfaces/slide';
import Motion from '../../components/common/motion';
import PageTitle from '../../components/common/pageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface Props {
  event: Event;
  slides: Slide[];
}

const EventSlides: NextPage<Props> = ({ event, slides }) => {
  return (
    <Motion>
      <PageTitle title={event.name} help={`#${event.hashtag}`} />
      <a href={event.url} target='_blank' rel='noopener noreferrer' data-testid='event_link'>
        <span>イベントページ</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
      </a>
    </Motion>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const eventId: string = String(context.query.id);
  const res = await fetch(`${process.env.GET_EVENT_URL}/${eventId}`);
  const { data } = await res.json();
  return {
    props: {
      event: {
        id: data.id,
        hashtag: data.hashtag,
        name: data.name,
        url: data.url,
      },
      slides: data.slides,
    },
  };
};

export default EventSlides;
