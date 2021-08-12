import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Word Hunt</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Search for words, get definitions, synonyms, phonetics, examples and audio pronunciation"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
