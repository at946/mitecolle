import { NextPage } from 'next';
import Link from 'next/link';
import SourceServiceTags from './sourceServiceTags';
import * as gtag from '../lib/gtag';

interface Props {
  rankingType: string;
}

const RankingTitle: NextPage<Props> = ({ rankingType }) => {
  const durationText = (): string => {
    switch (rankingType) {
      case 'day':
        return '１日の間';
      case 'week':
        return '１週間';
      default:
        return '';
    }
  };

  const clickRankingToggle = (e: React.MouseEvent<HTMLElement>): void => {
    const type = e.currentTarget.dataset.type;
    gtag.event({
      action: `click_ranking_toggle_${type}`,
      category: 'engagement',
      label: 'ranking_type',
      value: type,
    });
  };

  return (
    <div className='section has-text-centered'>
      <div className='container'>
        <h1 className='title' data-testid='title'>
          One {rankingType} ranking
        </h1>
        <div
          className='tabs is-toggle is-toggle-rounded is-small is-centered'
          data-testid='ranking_toggle'
        >
          <ul>
            <li
              className={rankingType === 'day' ? 'is-active' : ''}
              data-testid='ranking_toggle_menu'
            >
              <Link href='/?type=day' onClick={clickRankingToggle} data-type='day'>
                <a>Day</a>
              </Link>
            </li>
            <li
              className={rankingType === 'week' ? 'is-active' : ''}
              data-testid='ranking_toggle_menu'
            >
              <Link href='/?type=week' onClick={clickRankingToggle} data-type='week'>
                <a>Week</a>
              </Link>
            </li>
          </ul>
        </div>
        <p className='help mb-2'>
          直近{durationText()}でシェアされたツイート数で
          <br className='is-hidden-tablet' />
          スライドのランキングを作ってみたよ
        </p>
        <SourceServiceTags />
      </div>
    </div>
  );
};

export default RankingTitle;
