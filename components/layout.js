import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Bizzy';
export const siteTitle = 'Bizzy Tats';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className=""
              height={144}
              width={144}
              alt=""
            />
            <h1 className="">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className=""
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="">
              <Link href="/" className="">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className="">
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
    </>
  );
}