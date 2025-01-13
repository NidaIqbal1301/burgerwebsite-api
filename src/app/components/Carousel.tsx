import React from "react";

const Carousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 ">
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div
              className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700
             h-auto md:full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg"
                  alt="burger 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Bites
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-gradient-to-r from-black to-gray-700 ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://www.steakburger.es/wp-content/uploads/2024/05/la-burger-683x1024.jpg"
                  alt="burger 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Gourmet Grills
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0244/2227/files/Screen_Shot_2023-06-06_at_6.31.26_AM_480x480.png?v=1686048497"
                    alt="burger 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Spice Masala
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://dishingouthealth.com/wp-content/uploads/2023/02/Blackbeanburgers_Square2-2.jpg"
                    alt="burger 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Veggie
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/mouthwatering-burger-perfectly-melted-cheese-juicy-beef-served-side-golden-fries-341105293.jpg"
                  alt="burger 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Cheesy Delights
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
