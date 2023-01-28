import { NextPage } from 'next';
import SlideTitle from './slideTitle';
import SlideIframe from './slideIframe';
import SlideShareButton from './slideShareButton';
import Hashtags from './hashtags';
import { Slide } from '../../../interfaces/slide';

interface Props {
  slide: Slide;
  shareHashtags?: string; // スライドのハッシュタグの代わりにシェア時に使いたいハッシュタグがあればこちらを使う
}

const Slide: NextPage<Props> = ({ slide, shareHashtags }) => {
  return (
    <div data-testid='slide'>
      <div className='mb-5'>
        <SlideTitle title={slide.title} url={slide.url} />
        {!!slide.hashtags && <Hashtags hashtags={slide.hashtags} className='mt-3 mb-0' />}
      </div>
      <SlideIframe src={slide.iframeSrc} width={slide.width} height={slide.height} />
      <SlideShareButton
        title={slide.title}
        url={slide.url}
        hashtags={shareHashtags || slide.hashtags}
      />
    </div>
  );
};

export default Slide;
