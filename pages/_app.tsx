import '../styles/globals.scss';
import { GA_TRACKING_ID, pageview } from '../lib/gtag';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/common/layout';

// redux
import { Provider } from 'react-redux';
import { store } from '../store/store';

// framer-motion
import { AnimatePresence } from 'framer-motion';

// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Loading from '../components/common/loading';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    // loading during page transition
    const handleRouteStart = (url: string) => url !== router.asPath && setPageLoading(true);
    const handleRouteComplete = () => setPageLoading(false);

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);

    // GA
    const handleRouteChange = (url: string) => !!GA_TRACKING_ID && pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.asPath, router.events]);

  return (
    <Provider store={store}>
      {pageLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Component key={router.asPath} {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

export default MyApp;
