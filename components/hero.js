import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full  ">
      <div class="container mx-auto relative bg-[url('/images/hero.jpg')] bg-center bg-cover max-w-5xl">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center ">
            <h1 class="text-4xl font-bold tracking-tight text-[#4f46e5] sm:text-5xl">
              Tattoo Artist
            </h1>
            <p class="mt-6 text-lg leading-8 text-white">
              Located in Los Angeles, CA. Specializing in realism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// hero image : 
// background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");
// height: 50%;
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
// position: relative;