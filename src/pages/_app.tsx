import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.scss';
// import '@styles/page.css';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

export const metadata = {
  title: 'Code Breeze',
  description: "It's a breeze!",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Code Breeze</title>
        <meta name="description" content="It's a breeze!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
