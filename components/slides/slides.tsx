import { NextPage } from 'next';
import { Slides } from '../../interfaces/slides';
import Slide from './slide/slide';

interface Props {
  slides: Slides;
}

const Slides: NextPage<Props> = ({ slides }) => {
  return (
    <div className='section has-text-centered'>
      <div className='container'>
        {slides.map((slide) => (
          <div key={slide.id} className='section px-0'>
            <Slide slide={slide} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
