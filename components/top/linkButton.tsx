import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  text: string;
  href: string;
  addClass?: string;
  testid?: string;
}

const LinkButton: NextPage<Props> = ({ text, href, addClass, testid }) => {
  return (
    <Link href={href}>
      <a className={`button ${addClass}`} data-testid={testid}>
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
