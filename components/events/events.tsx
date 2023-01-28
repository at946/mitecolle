import { NextPage } from 'next';
import { Event } from '../../interfaces/event';
import EventCard from './eventCard';

interface Props {
  events: Event[];
}

const Events: NextPage<Props> = ({ events }) => {
  return (
    <section className='section'>
      <div className='columns is-multiline'>
        {events.map((event) => (
          <div className='column is-4' key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
