import { NextPage } from 'next';
import { Slide as IFSlide } from '../../interfaces/slide';
import Slide from './slide/slide';

interface Props {
  slides: IFSlide[];
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
