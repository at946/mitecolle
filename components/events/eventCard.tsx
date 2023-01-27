import { NextPage } from 'next';
import Event from '../../interfaces/event';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  event: Event;
}

const EventCard: NextPage<Props> = ({ event }) => {
  return (
    <div className='box' data-testid='event_card'>
      <h2 className='has-text-weight-bold' data-testid='event_hashtag'>
        #{event.hashtag}
      </h2>
      <p className='mb-2'>
        <span data-testid='event_name'>{event.eventName}</span>
        <a
          href={event.eventUrl}
          target='_blank'
          rel='noopener noreferrer'
          data-testid='event_link_icon'
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
        </a>
      </p>
      <p data-testid='slide_count'>{event.slideCount} slides</p>
    </div>
  );
};

export default EventCard;
