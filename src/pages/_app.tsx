import type { AppProps } from 'next/app';
import Head from 'next/head';

import { TranslationProvider, useTranslation } from '../utils/translation-context';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Button from '../components/Button/Button.component';

// import '@styles/page.css';
import '@styles/globals.scss';

import StyleUtils from '@utils/style.utils';
import styles from './page.module.scss';
const s = StyleUtils.styleMixer(styles);

export const metadata = {
  title: 'Code Breeze',
  description: 'Let it flow',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Head>
        <title>Code Breeze</title>
        <meta name="description" content="Let it flow!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContent Component={Component} pageProps={pageProps} />
    </TranslationProvider>
  );
}

function AppContent({ Component, pageProps }: any) {
  const { locale, switchLanguage } = useTranslation();

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <div className={s('language')}>
        <Button onClick={() => switchLanguage('en')} label={'🇬🇧'} className={s({ selected: locale === 'en' })} />
        <Button onClick={() => switchLanguage('pt')} label={'🇵🇹'} className={s({ selected: locale === 'pt' })} />
        <Button onClick={() => switchLanguage('nl')} label={'🇳🇱'} className={s({ selected: locale === 'nl' })} />
        {/* <Button onClick={() => switchLanguage('es')} label={'🇪🇸'} className={s({ selected: locale === 'es' })} /> */}
      </div>
    </>
  );
}
