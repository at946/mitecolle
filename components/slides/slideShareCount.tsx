import { NextPage } from 'next';
import * as gtag from '../../lib/gtag';

interface Props {
  shareCount: number;
  url: string;
  className?: string;
}

const slideShareCount: NextPage<Props> = (props: Props) => {
  const clickShareCount = () => {
    gtag.event({
      action: 'click_share_count',
      category: 'engagement',
      label: 'shareCount',
      value: String(props.shareCount),
    });
  };

  return (
    <a
      href={`https://twitter.com/search?q=${encodeURIComponent(
        `${props.url} OR url:${props.url}`,
      )}&f=live`}
      target='_blank'
      rel='noopener noreferrer'
      className={`tag is-rounded is-light ${props.className}`}
      onClick={clickShareCount}
      data-testid='slide_share_count'
    >
      {props.shareCount} tweets
    </a>
  );
};

export default slideShareCount;
