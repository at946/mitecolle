import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  hashtags: string;
  className?: string;
}

const Hashtags: NextPage<Props> = (props: Props) => {
  const hashtags = props.hashtags.split(',');
  return (
    <div className={`tags is-centered ${props.className}`}>
      {hashtags.map((hashtag, index) => (
        <Link key={index} href={`/?keyword=${hashtag}`}>
          <a className={`tag is-rounded is-light is-primary`} data-testid='hashtag'>
            #{hashtag}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Hashtags;
