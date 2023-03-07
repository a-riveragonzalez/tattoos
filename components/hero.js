export default function Hero() {
  return (
    <section className="w-full h-full ">
      <div className="container mx-auto relative bg-[url('/images/hero.jpg')] bg-center bg-cover max-w-5xl">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-[#4f46e5] sm:text-5xl">
              Tattoo Artist
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Located in Los Angeles, CA. Specializing in realism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}