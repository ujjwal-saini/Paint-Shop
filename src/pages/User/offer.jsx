import React from "react";
import {
  Tag,
  Gift,
  Percent,
  PaintBucket,
  Truck,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Offer() {
  const offers = [
    {
      title: "Flat 25% OFF",
      desc: "On premium interior wall paints",
      color: "from-indigo-600 to-purple-600",
      icon: <Percent size={45} />,
    },
    {
      title: "Buy 2 Get 1 Free",
      desc: "On selected paint accessories",
      color: "from-pink-500 to-rose-500",
      icon: <Gift size={45} />,
    },
    {
      title: "Free Waterproofing",
      desc: "With exterior paint bundles",
      color: "from-cyan-500 to-blue-500",
      icon: <PaintBucket size={45} />,
    },
  ];

  return (
    <div className="bg-[#f5f7fb] min-h-screen overflow-hidden">

      <section className="relative bg-gradient-to-r from-[#312E81] via-[#5B21B6] to-[#7C3AED] text-white overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="text-center lg:text-left">

              <p className="uppercase tracking-[4px] text-sm text-indigo-200 mb-4">
                Limited Time Deals
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Best Paint <br />
                Offers & Deals
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-8">
                Save more on premium paints, wall putty,
                waterproofing solutions, and painting tools.
              </p>

              <button className="mt-8 bg-white text-[#4F46E5] px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl">
                Explore Offers
              </button>

            </div>

            <div className="flex justify-center">

              <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

                <Tag
                  size={130}
                  className="text-white"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="text-center mb-14">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Trending Offers
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Grab exciting discounts on paints and home
            improvement products before the offers end.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {offers.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${item.color} rounded-[35px] p-8 text-white shadow-2xl relative overflow-hidden`}
            >

              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">

                <div className="mb-8">
                  {item.icon}
                </div>

                <h2 className="text-3xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 text-white/90 leading-7">
                  {item.desc}
                </p>

                <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 duration-300">
                  Claim Offer
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                Mega Festival Paint Sale
              </h2>

              <p className="mt-6 text-gray-600 leading-8 text-base">
                Upgrade your walls with luxury paint collections
                and enjoy huge savings on premium products.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">

                <div className="bg-indigo-50 rounded-3xl p-5">
                  <Truck className="text-indigo-600 mb-4" size={36} />

                  <h3 className="text-xl font-semibold text-gray-800">
                    Free Delivery
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-7">
                    Free shipping on all paint orders above ₹999.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-3xl p-5">
                  <Clock3 className="text-pink-600 mb-4" size={36} />

                  <h3 className="text-xl font-semibold text-gray-800">
                    Limited Time
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-7">
                    Hurry up before the offers expire this week.
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[35px] p-10 text-white text-center shadow-2xl">

              <Sparkles
                size={70}
                className="mx-auto mb-6"
              />

              <h2 className="text-5xl font-bold">
                50% OFF
              </h2>

              <p className="mt-4 text-lg text-white/90">
                On selected paint combos and designer shades
              </p>

              <button className="mt-8 bg-white text-[#4F46E5] px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl">
                Shop Now
              </button>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <Percent
              className="text-indigo-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Huge Discounts
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Save big on premium wall paints and accessories.
            </p>

          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <Gift
              className="text-pink-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Free Gifts
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Get free painting tools with selected purchases.
            </p>

          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <Truck
              className="text-green-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Fast Delivery
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Quick and secure paint delivery to your doorstep.
            </p>

          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <PaintBucket
              className="text-orange-500 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Premium Products
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Choose from modern luxury paint collections.
            </p>

          </div>

        </div>

      </section>

      <section className="bg-black text-white py-16 md:py-20 px-5 mt-10">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Help Choosing Paint Offers?
          </h2>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Contact our experts and get the best paint
            recommendations with exclusive discounts.
          </p>

          <button className="mt-8 bg-[#4F46E5] hover:bg-[#4338CA] transition duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            Contact Experts
          </button>

        </div>

      </section>

    </div>
  );
}

export default Offer;