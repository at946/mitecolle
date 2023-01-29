import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';

interface Props {
  text: string;
  href: string;
}

const OuterLink: NextPage<Props> = ({ text, href }) => {
  return (
    <a href={href} target='_blank' rel='noreferrer noopener'>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' />
    </a>
  );
};

export default OuterLink;
