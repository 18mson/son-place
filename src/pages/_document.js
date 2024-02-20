import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPR3JJSS"
            style={{ display: 'none', visibility: 'hidden' }}
            width="0"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
