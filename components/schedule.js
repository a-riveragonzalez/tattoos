import Link from "next/link";
import { Parallax } from "react-parallax";

export default function Schedule() {
  return (
    <>
      <Parallax
        bgImage="/images/redtattoosign.jpg"
        bgImageAlt="tattoo neon sign"
        strength={800}
        className="home-image"
      >
        <section className="w-full h-max py-96 ">
          <div className="container mx-auto relative">
             <div className="mx-auto max-w-2xl "> 
              <div className="text-center ">
                <Link
                  href="/form"
                  className="my-1 inline-block rounded bg-white py-2 px-2 text-base font-medium text-black transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                >
                  Schedule Your Session <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </>
  );
}
