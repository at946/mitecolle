import { NextPage } from 'next';
import Head from 'next/head';

const MyHead: NextPage = () => {
  const title = 'mitecolle';
  const description =
    'mitecolleは、ツイッターでシェアされている人気のスライドを紹介しています！注目度の高いスライドを見て、インプットの質を高めましょう！';
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={baseUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${baseUrl}/ogp.png`} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
}

export default MyHead