import React, { useState } from "react";

export default function Gallery() {
  const [isTat, setIsTat] = useState(false);

  return (
    <>
      <h2 className="text-center pl-2 mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Work | Gallery
      </h2>

      {/* toggle  */}
      <div className="text-center pt-8">
        <label
          for="Toggle3"
          className="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800 "
        >
          <input
            id="Toggle3"
            type="checkbox"
            className="hidden peer"
            checked={isTat}
            onChange={(e) => setIsTat(e.target.checked)}
          />
          <span className="px-4 py-2 rounded-l-md bg-blue-400 peer-checked:bg-gray-300">
            Tattoos
          </span>
          <span className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-blue-400">
            Drawings
          </span>
        </label>
      </div>

      {/* this will be a if then for tattoos or drawings */}

      {isTat ? (
        <section className="columns-1 md:columns-2 xl:columns-3 py-10 pb-20 px-8">
                    <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_thor.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_daredevil.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_steve_jobs.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_elvis.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_gum.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_neo.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_karate_kid.png"
            />
          </div>
          {/* <div className="">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/drawings/drawing_girl.png"
            />
          </div> */}



          
        </section>
      ) : (
        <section className="columns-1 md:columns-2 xl:columns-3 py-10 pb-20 px-8">
<div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_coraline.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_batman_joker.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_grim.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_joker.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_soul_eater.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_clown_girl_gun.png"
            />
          </div>
          <div className="pb-5">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_girl.png"
            />
          </div>
          {/* <div className="">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/tattoos/tattoo_girl.png"
            />
          </div> */}
        </section>
      )}
    </>
  );
}
