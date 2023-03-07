import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <p className='text-2xl font-bold '>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you will be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <p>
          Hello This is a trial
        </p>
      </section>
    </Layout>
  );
}