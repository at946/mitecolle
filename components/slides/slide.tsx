import { NextPage } from 'next';
import SlideTitle from './slideTitle';
import SlideShareCount from './slideShareCount';
import SlideIframe from './slideIframe';
import SlideShareButton from './slideShareButton';
import Hashtags from './hashtags';

interface Props {
  title: string;
  url: string;
  shareCount: number;
  iframeSrc: string;
  width: number;
  height: number;
  hashtags: string;
}

const Slide: NextPage<Props> = (props: Props) => {
  return (
    <div data-testid='slide'>
      <div className='mb-5'>
        <SlideTitle title={props.title} url={props.url} />
        {props.hashtags !== '' && <Hashtags hashtags={props.hashtags} className='mt-3 mb-0' />}
        <SlideShareCount shareCount={props.shareCount} url={props.url} className='mt-2' />
      </div>
      <SlideIframe src={props.iframeSrc} width={props.width} height={props.height} />
      <SlideShareButton title={props.title} url={props.url} />
    </div>
  );
};

export default Slide;
