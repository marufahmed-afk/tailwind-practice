import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../app/components/layout/Footer/Footer';
import Header from '../app/components/layout/Header/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tailwind Header</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
