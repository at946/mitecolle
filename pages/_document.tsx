/* eslint-disable @next/next/no-sync-scripts */
import { GA_TRACKING_ID } from '../lib/gtag';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          {GA_TRACKING_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
          {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
            <>
              <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`} crossOrigin="anonymous"></script>
            </>
          )}
          {process.env.NEND_IS_ACTIVE && (
            <>
              <script
                type='text/javascript'
                dangerouslySetInnerHTML={{
                  __html: `var nend_params = {"media":70514,"site":357730,"spot":1060959,"type":2,"oriented":1};`,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-sync-scripts */}
              <script type='text/javascript' src='https://js1.nend.net/js/nendAdLoader.js' />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
