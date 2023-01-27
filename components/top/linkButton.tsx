import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  text: string;
  href: string;
  testid?: string;
}

const LinkButton: NextPage<Props> = ({ text, href, testid }) => {
  return (
    <Link href={href}>
      <a className='button is-primary' data-testid={testid}>
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
