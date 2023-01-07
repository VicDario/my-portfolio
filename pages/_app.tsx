import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Fira_Code } from '@next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={firaCode.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
