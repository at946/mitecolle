import { NextPage } from 'next';
import Head from 'next/head';

const title = 'mitecolle';
const description =
  'mitecolleは、今話題のスライドを一挙にまとめたウェブアプリです。' +
  'Docswell、SlideShare、Speaker Deckで公開されている注目度の高いスライドを厳選して紹介し、インプットの質を高めます。' +
  'ビジネスや学習など、様々な場面で役立ちます。今すぐmitecolleで学びを深めましょう！';

const defaultHead: NextPage = () => {
  return (
    <Head>
      <title key='title'>{title}</title>
      <meta key='description' name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={process.env.SITE_URL} />
      <meta key='og:title' property='og:title' content={title} />
      <meta key='og:description' property='og:description' content={description} />
      <meta property='og:image' content={`${process.env.SITE_URL}/ogp.png`} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

export default defaultHead;
