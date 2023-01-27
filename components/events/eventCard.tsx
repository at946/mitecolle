import { NextPage } from 'next';
import Link from 'next/link';
import Event from '../../interfaces/event';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  event: Event;
}

const EventCard: NextPage<Props> = ({ event }) => {
  return (
    <div className='card' data-testid='event_card'>
      <header className='card-header'>
        <p className='card-header-title' data-testid='event_hashtag'>
          #{event.hashtag}
        </p>
      </header>
      <div className='card-content'>
        <div className='content'>
          <p>
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
      </div>
      <footer className='card-footer'>
        <Link href={`/events/${event.hashtag}`}>
          <a className='card-footer-item' data-testid='show_slides_link'>
            Show slides
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default EventCard;
