import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faTabletScreenButton,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <section className="overflow-hidden bg-white py-20 sm:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Tattoo Artist
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  With years of dedicated experience in perfecting my craft, I
                  bring your vision to life, crafting tattoos that you'll
                  proudly wear for a lifetime. From small and delicate designs
                  to awe-inspiring full-sleeve masterpieces, your unique ideas
                  are my artistic passion.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <FontAwesomeIcon icon={faPenNib} /> Realism.
                    </dt>
                    <dd className="inline">
                      {" "}
                      Specializing in realistic tattooing, meticulously crafting tattoos that capture the finest details, resulting in stunning and lifelike artwork.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <FontAwesomeIcon icon={faTabletScreenButton} /> Custom
                      tattoos.
                    </dt>
                    <dd className="inline">
                      {" "}
                      Offering custom tattoos tailored to your unique vision, ensuring that your tattoo is one-of-a-kind and perfectly represents your individuality.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <FontAwesomeIcon icon={faSuitcaseMedical} /> Aftercare
                      plans.
                    </dt>
                    <dd className="inline">
                      {" "}
                      To promote healing and protect the longevity of a new
                      tattoo.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              src="/images/horizontal-tattoo.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              // className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              // width="2432"
              // height="1442"
            ></img>
          </div>
        </div>
      </section>

      <div className="bg-[#020609] pb-12"> </div>
    </>
  );
}
