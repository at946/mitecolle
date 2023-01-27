import { NextPage } from 'next';
import Event from '../../interfaces/event';
import EventCard from './eventCard';

interface Props {
  events: Event[];
}

const Events: NextPage<Props> = ({ events }) => {
  return (
    <div className='columns is-multiline section'>
      {events.map((event, index) => (
        <div className='column is-4' key={index}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default Events;
