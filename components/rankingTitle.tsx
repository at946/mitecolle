import { NextPage } from 'next';

const RankingTitle: NextPage = ({}) => {
  return (
    <div className='section has-text-centered pb-0'>
      <div className='container'>
        <h1 className='title' data-testid='title'>
          Slides
        </h1>
        <p className='help'>Twitterで今シェアされているスライドを集めました。</p>
      </div>
    </div>
  );
};

export default RankingTitle;
