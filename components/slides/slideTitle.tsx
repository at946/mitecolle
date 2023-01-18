import { NextPage } from 'next';
import * as gtag from '../../lib/gtag';

interface Props {
  title: string;
  url: string;
}

const slideTitle: NextPage<Props> = ({ title, url }: Props) => {
  const clickTitle = () => {
    gtag.event({
      action: 'click_title',
      category: 'engagement',
      label: 'title',
      value: title,
    });
  };

  return (
    <p style={{ wordWrap: 'break-word' }}>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='has-text-dark has-text-weight-bold is-size-5'
        onClick={clickTitle}
        data-testid='slide_title'
      >
        {title}
      </a>
    </p>
  );
};

export default slideTitle;
