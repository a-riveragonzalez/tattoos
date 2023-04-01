export default function Gallery() {
  return (
    <>
      <h2 className="text-center mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        look at this thing, isn't it neat{" "}
      </h2>

      {/* toggle  */}
      <div className="text-center pt-9">
        <label
          for="Toggle3"
          className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800 bg-white"
        >
          <input id="Toggle3" type="checkbox" className="hidden peer" />
          <span className="px-4 py-2 rounded-l-md dark:bg-violet-400 peer-checked:dark:bg-gray-300">
            Monthly
          </span>
          <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-violet-400">
            Annually
          </span>
        </label>
      </div>

      {/* this will be a if then for tattoos or drawings */}
      <section className="columns-1 md:columns-2 xl:columns-3 py-10 pb-20 px-8">
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="pb-5">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
        <div className="">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
      </section>
    </>
  );
}
