import { NextPage } from 'next';
import styles from './slide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import * as gtag from '../lib/gtag';

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
  const shareText = `${props.title}\n\n#mitecolle\n${props.url}`;
  const shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  const clickTitle = () => {
    gtag.event({
      action: 'click_title',
      category: 'engagement',
      label: 'title',
      value: props.title,
    });
  };

  const clickShareCount = () => {
    gtag.event({
      action: 'click_share_count',
      category: 'engagement',
      label: 'title',
      value: props.title,
    });
  };

  const clickShareButton = () => {
    gtag.event({
      action: 'click_share_button',
      category: 'engagement',
      label: 'title',
      value: props.title,
    });
  };

  return (
    <div data-testid='slide'>
      <p>
        <a
          href={props.url}
          target='_blank'
          rel='noopener noreferrer'
          className='has-text-dark has-text-weight-bold is-size-5'
          onClick={clickTitle}
          data-testid='slide_title'
        >
          {props.title}
        </a>
      </p>
      <p className='mb-4'>
        <a
          href={`https://twitter.com/search?q=${encodeURIComponent(props.url)}&f=live`}
          target='_blank'
          rel='noopener noreferrer'
          className='tag is-rounded is-info is-light'
          data-testid='slide_share_count'
        >
          {props.shareCount} tweets
        </a>
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
      </div>
      <a
        className='button is-black is-small is-rounded mt-3'
        href={shareHref}
        target='_blank'
        rel='noopener noreferrer'
        style={{ background: '#1DA1F2' }}
        onClick={clickShareButton}
        data-testid='slide_share_button'
      >
        <FontAwesomeIcon icon={faTwitter} className='mr-2' />
        私もシェア
      </a>
    </div>
  );
};

export default Slide;
