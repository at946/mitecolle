import { NextPage } from 'next';

interface Props {
  hashtags: string;
  className?: string;
}

const Hashtags: NextPage<Props> = (props: Props) => {
  const hashtags = props.hashtags.split(',');
  return (
    <div className={`tags is-centered ${props.className}`}>
      {hashtags.map((hashtag, index) => (
        <span key={index} className={`tag is-rounded is-light is-primary`} data-testid='hashtag'>
          #{hashtag}
        </span>
      ))}
    </div>
  );
};

export default Hashtags;
