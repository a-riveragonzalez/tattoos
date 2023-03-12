import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <nav className="mx-auto flex items-center justify-between py-4 px-6 bg-[#020609]">
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 inline-flex hover:decoration-white"
            >
              <img
                className="h-9 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
              <p className="text-white text-3xl ml-2">BizzyTats</p>
            </Link>
          </div>

          {home ? (
            <div className="">
              <Link
                href="/form"
                className="my-1 inline-block rounded bg-white py-1 px-2 text-base font-medium text-black transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
              >
                Contact <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : (
            <div className="">
              <Link
                href="/"
                className="my-1 inline-block rounded bg-white py-1 px-2 text-base font-medium text-black transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
              >
                <span aria-hidden="true">&larr;</span> Home 
              </Link>
            </div>
          )}
        </nav>
      </header>
      <main className="bg-[#020609]">{children}</main>
      <footer className="bg-black text-center pt-2 pb-6">
        <div>
          <a className="text-white inline-flex" href="">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />
            <p className="pl-2">bizzytats &copy; 2023</p>
          </a>
        </div>

        <a
          className="text-white inline-flex hover:no-underline"
          href="https://github.com/a-riveragonzalez"
        >
          <p>designed by : </p>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: 20 }}
            className="pt-1 pl-1"
          />
        </a>
      </footer>
    </>
  );
}

// <Image
//   priority
//   src="/images/profile.jpg"
//   className=""
//   height={144}
//   width={144}
//   alt=""
// />
// <h1 className="">{name}</h1>

//   <>
//     <Link href="/">
//       <Image
//         priority
//         src="/images/profile.jpg"
//         className=""
//         height={108}
//         width={108}
//         alt=""
//       />
//     </Link>
//     <h2 className="">
//       <Link href="/" className="">
//         {name}
//       </Link>
//     </h2>
//   </>
