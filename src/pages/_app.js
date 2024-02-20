import Head from 'next/head';
import React from 'react';

import { wrapper } from '../store/configureStore';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Codebase SSR</title>
        <meta
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          name="viewport"
        />
        <meta
          content="Standar codebase yang ditentukan untuk Frontend yang menggunakan SSR."
          name="description"
        />

        {/* Favicon */}
        <link href="/favicon.ico" rel="shortcut icon" />

        {/* Meta OG Open Graph; Membagikan konten SEO kepada Facebook */}
        <meta content="Codebase Frontend SSR - TelkomDev" name="og:title" />
        <meta
          content="Standar codebase yang ditentukan untuk Frontend yang menggunakan SSR."
          name="og:description"
        />
        <meta content="Codebase Frontend SSR - TelkomDev" name="og:site_name" />
        <meta content="website" name="og:type" />
        <meta
          content="https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr"
          name="og:url"
        />

        {/* Meta Twitter; Membagikan konten SEO kepada Twitter */}
        <meta content="summary" name="twitter:card" />
        <meta
          content="Codebase Frontend SSR - TelkomDev"
          name="twitter:title"
        />
        <meta
          content="https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr"
          name="twitter:url"
        />
        <meta
          content="Standar codebase yang ditentukan untuk Frontend yang menggunakan SSR."
          name="twitter:description"
        />
      </Head>
      {/* Google Tag Manager */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PPR3JJSS');`,
        }}
        id="google-analytics"
      />
      {/* End Google Tag Manager */}

      {/* Component yang dirender */}
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
