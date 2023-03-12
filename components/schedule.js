import Link from "next/link";

export default function Schedule() {
  return (
    <section className="w-full h-max py-12  bg-black">
      <div className="container mx-auto relative bg-[url('/images/redtattoosign.jpg')] bg-top bg-cover bg-no-repeat">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
  );
}
