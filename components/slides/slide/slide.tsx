import { NextPage } from 'next';
import SlideTitle from './slideTitle';
import SlideIframe from './slideIframe';
import SlideShareButton from './slideShareButton';
import Hashtags from './hashtags';
import { Slide } from '../../../interfaces/slide';

interface Props {
  slide: Slide;
}

const Slide: NextPage<Props> = ({ slide }) => {
  return (
    <div data-testid='slide'>
      <div className='mb-5'>
        <SlideTitle title={slide.title} url={slide.url} />
        {slide.hashtags !== '' && <Hashtags hashtags={slide.hashtags} className='mt-3 mb-0' />}
      </div>
      <SlideIframe src={slide.iframeSrc} width={slide.width} height={slide.height} />
      <SlideShareButton title={slide.title} url={slide.url} />
    </div>
  );
};

export default Slide;
