import Link from "next/link";

export default function Schedule() {
    return (
      <section className="w-full h-full pb-12">
        schedule here. pic picture with button 
        <div className="">
              <Link
                href="/form"
                className="my-1 inline-block rounded bg-[#4f46e5] py-2 px-2 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
              >
                Contact <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
      </section>
    );
  }