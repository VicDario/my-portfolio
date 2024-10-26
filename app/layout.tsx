import { ReactNode } from 'react';
import { Lato } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '@styles/globals.scss';

export const metadata = {
  title: 'Víctor Fernández - Developer',
  description: 'Hello, this is my portfolio'
};

const lato = Lato({
  variable: '--lato-font',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
