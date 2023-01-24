import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <p className='has-text-dark has-text-weight-bold is-size-5' style={{ wordWrap: 'break-word' }}>
      <span data-testid='slide_title'>{title}</span>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        onClick={clickTitle}
        data-testid='slide_title_link'
      >
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
      </a>
    </p>
  );
};

export default slideTitle;
