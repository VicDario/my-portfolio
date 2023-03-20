import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Lato } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
