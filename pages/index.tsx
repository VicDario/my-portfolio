import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@components/header/header.component';
import Footer from '@components/footer/footer.component';
import AboutMe from '@components/about-me/about-me.component';
//import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Víctor Fernández - Developer</title>
        <meta name="description" content="Hello, this is my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutMe />
      <Footer />
    </>
  );
};

export default Home;
