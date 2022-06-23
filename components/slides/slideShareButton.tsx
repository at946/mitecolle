import { NextPage } from 'next';
import * as gtag from '../../lib/gtag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

interface Props {
  title: string;
  url: string;
}

const SlideShareButton: NextPage<Props> = ({ title, url }: Props) => {
  const shareText = `${title}\n\n#mitecolle\n${url}`;
  const shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  const clickShareButton = () => {
    gtag.event({
      action: 'click_share_button',
      category: 'engagement',
      label: 'title',
      value: title,
    });
  };

  return (
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
  );
};

export default SlideShareButton;
