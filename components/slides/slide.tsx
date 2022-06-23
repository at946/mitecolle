import { NextPage } from 'next';
import SlideTitle from './slideTitle';
import SlideShareCount from './slideShareCount';
import SlideIframe from './slideIframe';
import SlideShareButton from './slideShareButton';

interface Props {
  title: string;
  url: string;
  shareCount: number;
  iframeSrc: string;
  width: number;
  height: number;
}

const Slide: NextPage<Props> = (props: Props) => {
  return (
    <div data-testid='slide'>
      <SlideTitle title={props.title} url={props.url} />

      <SlideShareCount shareCount={props.shareCount} url={props.url} />

      <SlideIframe src={props.iframeSrc} width={props.width} height={props.height} />

      <SlideShareButton title={props.title} url={props.url} />
    </div>
  );
};

export default Slide;
