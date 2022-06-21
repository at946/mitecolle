import { NextPage } from 'next';
import styles from './slide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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
        <span className='tag is-rounded is-info is-light' data-testid='slide_share_count'>
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
      </div>
      <a
        className='button is-black is-small is-rounded mt-3'
        href={shareHref}
        target='_blank'
        rel='noopener noreferrer'
        style={{ background: '#1DA1F2' }}
        data-testid='slide_share_button'
      >
        <FontAwesomeIcon icon={faTwitter} className='mr-2' />
        私もシェア
      </a>
    </div>
  );
};

export default Slide;
