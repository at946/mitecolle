import { NextPage } from 'next';
import { Slide as IFSlide } from '../../interfaces/slide';
import Slide from './slide/slide';

interface Props {
  slides: IFSlide[];
  shareHashtags?: string; // スライドのハッシュタグの代わりにシェア時に使いたいハッシュタグがあればこちらを使う
}

const Slides: NextPage<Props> = ({ slides, shareHashtags }) => {
  return (
    <div className='section has-text-centered'>
      <div className='container'>
        {slides.map((slide) => (
          <div key={slide.id} className='section px-0'>
            <Slide slide={slide} shareHashtags={shareHashtags} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
