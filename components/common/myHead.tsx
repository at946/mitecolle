import { NextPage } from 'next';
import Head from 'next/head';

const title = 'mitecolle';
const description = `mitecolle（みてこれ）は、Twitterでシェアされている今話題のスライドを展覧しているウェブアプリです。
Docswell（ドクセル）、SlideShare、Speaker Deckで公開されているスライドを紹介しています。
注目度の高いスライドでインプットの質が高まります！勉強になる！学びになる！`;

const MyHead: NextPage = () => {
  return (
    <Head>
      <title key='title'>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={process.env.SITE_URL} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${process.env.SITE_URL}/ogp.png`} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

export default MyHead;
