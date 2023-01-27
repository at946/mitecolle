import type { NextPage } from 'next';
import Link from 'next/link';
import Motion from '../components/common/motion';
import PageTitle from '../components/common/pageTitle';

const History: NextPage = () => {
  return (
    <Motion>
      <PageTitle title='Events' help='イベントのスライドをハッシュタグから集めました。' />
      <div className='section buttons is-justify-content-center'>
        <Link href="/">
          <a className="button is-primary">
            top
          </a>
        </Link>
      </div>
    </Motion>
  );
};

export default History;
