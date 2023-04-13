import '../styles/global.css';
import '../styles/checkout.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import ScrollContextComponent from '@/components/atoms/getScroll';
import FontLoadedContextComponent from '@/components/molecules/FontLoadedContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <FontLoadedContextComponent>
      <ScrollContextComponent>
        <Component {...pageProps} />
      </ScrollContextComponent>
    </FontLoadedContextComponent>
  </>
);

export default MyApp;
