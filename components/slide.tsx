import { NextPage } from 'next';
import styles from './slide.module.scss';

interface Props {
  id: string;
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
      <p>
        <a
          href={props.url}
          target='_blank'
          rel='noopener noreferrer'
          className='has-text-dark has-text-weight-bold is-size-5'
          data-testid='slide_title'
        >
          {props.title}
        </a>
      </p>
      <p className='mb-4'>
        <span className='tag help is-rounded is-info is-light' data-testid='slide_share_count'>
          {props.shareCount} tweets
        </span>
      </p>
      <div>
        <iframe
          src={props.iframeSrc}
          loading='lazy'
          className={styles.iframe}
          frameBorder='0'
          allowFullScreen={true}
          style={{
            width: `${props.width}px`,
            maxWidth: '100%',
            aspectRatio: `${props.width / props.height}`,
          }}
          data-testid='slide_iframe'
        />
        <script async data-id={props.id} src='//speakerdeck.com/assets/embed.js' />
      </div>
    </div>
  );
};

export default Slide;

{
  /* <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/9fdff15ab065434fb1ad97a6a673cf88" title="チームが前に進むために、 私が取り組んできたいくつかのこと" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 314px;" data-ratio="1.78343949044586"></iframe> */
}

{
  /* <script async class="speakerdeck-embed" data-id="9fdff15ab065434fb1ad97a6a673cf88" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script> */
}

{
  /* <iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/af12939e851f4044a63ae816fd403cba" title="自然言語処理とVision-and-Language / A Tutorial on NLP &amp; Vision-and-Language" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 420px;" data-ratio="1.3333333333333333"></iframe> */
}
