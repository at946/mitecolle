import { NextPage } from 'next';
import * as gtag from '../../lib/gtag';

interface Props {
  shareCount: number;
  url: string;
}

const slideShareCount: NextPage<Props> = ({ shareCount, url }: Props) => {
  const clickShareCount = () => {
    gtag.event({
      action: 'click_share_count',
      category: 'engagement',
      label: 'shareCount',
      value: String(shareCount),
    });
  };

  return (
    <p className='mb-4'>
      <a
        href={`https://twitter.com/search?q=url:${encodeURIComponent(url)}&f=live`}
        target='_blank'
        rel='noopener noreferrer'
        className='tag is-rounded is-info is-light'
        onClick={clickShareCount}
        data-testid='slide_share_count'
      >
        {shareCount} tweets
      </a>
    </p>
  );
};

export default slideShareCount;
