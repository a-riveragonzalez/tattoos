import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Bizzy";
export const siteTitle = "Bizzy Tats";

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
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="">
        {home ? (
          <>
            <nav className="mx-auto flex items-center justify-between py-4 px-6 bg-gray-400">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5 inline-flex hover:decoration-[#4f46e5]">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                  <p className="text-[#4f46e5] text-2xl  ml-2 ">BizzyTats</p>
                </a>
              </div>
              

              <div className="">
                <a
                  href="#"
                  className="my-1 inline-block rounded bg-[#4f46e5] py-2 px-2 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                >
                  Contact <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            {/* <Image
              priority
              src="/images/profile.jpg"
              className=""
              height={144}
              width={144}
              alt=""
            />
            <h1 className="">{name}</h1> */}
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
