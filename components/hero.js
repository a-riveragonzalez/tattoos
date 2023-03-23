import { Parallax } from "react-parallax";

export default function Hero() {
  return (
    <>
      <Parallax
        bgImage='/images/hero.jpg'
        bgImageAlt="tattoo supplies"
        strength={800}
        className="home-image"
      >
        <section className="w-full h-full pb-12">
          <div className="container mx-auto relative max-w-5xl">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center ">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  <span className="bg-black/[.20] px-2">Tattoo Artist</span>
                </h1>
                <p className="mt-5 text-lg leading-8 text-white">
                  <span className="bg-black/[.60] p-1">
                    Located in Los Angeles, CA
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </>
  );
}
