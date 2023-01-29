import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faLandmark, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import Link from 'next/link';
import Motion from '../components/common/motion';
import OuterLink from '../components/common/outerLink';
import PageTitle from '../components/common/pageTitle';

const AboutUs: NextPage = () => {
  return (
    <Motion>
      <div className='has-text-left'>
        <PageTitle title='About us' />
        <section className='section pt-0'>
          <div className='content'>
            <h4>
              <FontAwesomeIcon icon={faCircleQuestion} className='mr-2' />
              mitecolleについて
            </h4>
            <p>
              <strong>mitecolle（みてこれ）</strong>
              は、Twitterでシェアされている今話題のスライドをまとめたサイトです。
              <OuterLink text='Docswell' href='https://www.docswell.com' />、
              <OuterLink text='SlideShare' href='https://www.slideshare.net/' />、
              <OuterLink text='Speaker Deck' href='https://speakerdeck.com/' />{' '}
              で公開されているスライドを展示しています。
            </p>
          </div>
          <div className='content'>
            <h4>
              <FontAwesomeIcon icon={faLandmark} className='mr-2' />
              2つの展示方法
            </h4>
            <p>
              <Link href='/slides'>
                <a>
                  <strong>Slides</strong>
                </a>
              </Link>{' '}
              -
              直近1ヶ月のツイートからシェアされたスライドを独自の計算方法でランキング付けして展示しています。
            </p>
            <p>
              <Link href='/events'>
                <a>
                  <strong>Events</strong>
                </a>
              </Link>{' '}
              -
              イベント公式ハッシュタグでシェアされたスライドを展示しています。ある程度の数のスライドがシェアされているイベントに限定してご紹介しています。
            </p>
          </div>
          <div className='content'>
            <h4>
              <FontAwesomeIcon icon={faTwitter} className='mr-2' />
              Twitterアカウント
            </h4>
            <p>
              公式アカウントは
              <OuterLink text='こちら' href='https://twitter.com/mitecolle' />
            </p>
            <p>
              今シェアされているスライドをほぼリアルタイムでシェアしています。フォローするだけで様々なスライドに出会うチャンスが巡ってくるでしょう。
            </p>
          </div>
          <div className='content'>
            <h4>
              <FontAwesomeIcon icon={faLaptopCode} className='mr-2' />
              開発者
            </h4>
            <ul>
              <li>
                <OuterLink text='asato' href='https://twitter.com/at_946' />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Motion>
  );
};

export default AboutUs;
