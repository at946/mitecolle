import { NextPage } from 'next';
import Link from 'next/link';
import { Event } from '../../interfaces/event';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  event: Event;
}

const EventCard: NextPage<Props> = ({ event }) => {
  return (
    <div className='card' data-testid='event_card'>
      <header className='card-header'>
        <p className='card-header-title has-text-left' data-testid='event_name'>
          {event.name}
        </p>
        <button className='card-header-icon'>
          <a
            href={event.url}
            target='_blank'
            rel='noopener noreferrer'
            data-testid='event_link_icon'
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </button>
      </header>
      <div className='card-content'>
        <div className='content'>
          <p className='has-text-weight-bold' data-testid='event_hashtag'>
            #{event.hashtag}
          </p>
          <p data-testid='event_date'>
            {event.startDate === event.endDate
              ? `${event.startDate}`
              : `${event.startDate} ~ ${event.endDate}`}
          </p>
          <p data-testid='slide_count'>{event.slideCount} slides</p>
        </div>
      </div>
      <footer className='card-footer'>
        <Link href={`/events/${event.id}`}>
          <a className='card-footer-item' data-testid='show_slides_link'>
            Show slides
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default EventCard;
