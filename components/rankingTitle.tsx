import { NextPage } from 'next';

const RankingTitle: NextPage = ({}) => {
  return (
    <div className='section has-text-centered pb-0'>
      <div className='container'>
        <h1 className='title' data-testid='title'>
          Slides
        </h1>
        <p className='help'>
          Twitterでシェアされた
          <a href='https://www.docswell.com' target='_blank' rel='noreferrer'>
            Docswell
          </a>
          ,
          <a href='https://www.slideshare.net' target='_blank' rel='noreferrer'>
            SlideShare
          </a>
          ,
          <a href='https://speakerdeck.com' target='_blank' rel='noreferrer'>
            Speaker Deck
          </a>
          で公開されているスライドを
          <br />
          独自に集計した Share point 順に表示しています。
        </p>
      </div>
    </div>
  );
};

export default RankingTitle;
