import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero'
import About from '../components/about';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <About />
    </Layout>
  );
}