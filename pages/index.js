import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Schedule from '../components/schedule';
import Gallery from '../components/gallery';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <About />
      <Gallery />
      <Schedule />
    </Layout>
  );
}