import Link from "next/link";

export default function Schedule() {
  return (
    <section className="w-full h-full pb-12 text-white">
      schedule here. pic picture with button
      <div className="">
        <Link
          href="/form"
          className="my-1 inline-block rounded bg-[#4f46e5] py-2 px-2 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
        >
          Contact <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <article class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2">
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Offices worldwide</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
        </div>

        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
      </article>
    </section>
  );
}
