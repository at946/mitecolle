import { NextPage } from 'next';
import Slide from './slide';

interface Props {
  slides: [
    {
      id: string;
      title: string;
      url: string;
      sharePoint: number;
      iframeSrc: string;
      width: number;
      height: number;
      hashtags: string;
    },
  ];
}

const Slides: NextPage<Props> = ({ slides }) => {
  return (
    <div className='section has-text-centered'>
      <div className='container'>
        {slides.map((slide) => (
          <div key={slide.id} className='section px-0'>
            <Slide
              title={slide.title}
              url={slide.url}
              sharePoint={slide.sharePoint}
              iframeSrc={slide.iframeSrc}
              width={slide.width}
              height={slide.height}
              hashtags={slide.hashtags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
