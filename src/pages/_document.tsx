import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
          <link
            rel="preconnect"
            href="https://4wdpmdxj.cdn.imgeng.in/"
            crossOrigin=""
          />
          <link rel="dns-prefetch" href="https://4wdpmdxj.cdn.imgeng.in/" />

          {/* <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,300&amp;family=Playfair+Display:ital,wght@1,400;1,900&amp;display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
