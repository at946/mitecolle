import { NextPage } from 'next';
import Link from 'next/link';
import * as gtag from '../../lib/gtag';

interface Props {
  hashtags: string;
  className?: string;
}

const searchHashtag = (hashtag: string): void => {
  gtag.event({
    action: 'search_hashtag',
    category: 'engagement',
    label: 'hashtag',
    value: hashtag,
  });
};

const Hashtags: NextPage<Props> = (props: Props) => {
  const hashtags = props.hashtags.split(',');
  return (
    <div className={`tags is-centered ${props.className}`}>
      {hashtags.map((hashtag, index) => (
        <Link key={index} href={`/?keyword=${hashtag}`}>
          <a
            className={`tag is-rounded is-light is-primary`}
            onClick={() => searchHashtag(hashtag)}
            data-testid='hashtag'
          >
            #{hashtag}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Hashtags;
