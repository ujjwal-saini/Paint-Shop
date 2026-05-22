import React from "react";
import {
  ShieldCheck,
  Truck,
  Star,
  BadgeCheck,
  ShoppingBag,
  PaintBucket,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Card from "./card";

function Shop() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen overflow-hidden">

      <section className="relative overflow-hidden bg-gradient-to-r from-[#312E81] via-[#5B21B6] to-[#7C3AED] text-white">

        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <div className="text-center lg:text-left order-2 lg:order-1">

              <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-indigo-200 mb-4">
                Trusted Paint Store
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Paints <br />
                For Every Wall
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-200 leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">
                Buy trusted paints, waterproof coatings,
                primers, putty, and wall finishes with fast
                delivery and expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                <button className="bg-white text-[#4F46E5] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base">

                  <ShoppingBag size={20} />

                  Shop Now

                </button>

                <button className="bg-white/10 border border-white/20 backdrop-blur-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/20 duration-300 flex items-center justify-center gap-3 text-sm sm:text-base">

                  <Truck size={20} />

                  Fast Delivery

                </button>

              </div>

            </div>

            <div className="flex justify-center order-1 lg:order-2">

              <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[30px] sm:rounded-[40px] p-8 sm:p-10 shadow-2xl">

                <PaintBucket
                  size={100}
                  className="text-white sm:w-[140px] sm:h-[140px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:-mt-10 relative z-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="bg-white rounded-[25px] sm:rounded-[30px] shadow-xl p-6 text-center">

            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-indigo-100 flex items-center justify-center mb-5">

              <ShieldCheck className="text-indigo-600" />

            </div>

            <h3 className="font-bold text-lg text-gray-800">
              Trusted Quality
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              Premium quality paints from trusted brands.
            </p>

          </div>

          <div className="bg-white rounded-[25px] sm:rounded-[30px] shadow-xl p-6 text-center">

            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5">

              <Truck className="text-green-600" />

            </div>

            <h3 className="font-bold text-lg text-gray-800">
              Fast Delivery
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              Quick doorstep delivery for your orders.
            </p>

          </div>

          <div className="bg-white rounded-[25px] sm:rounded-[30px] shadow-xl p-6 text-center">

            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-pink-100 flex items-center justify-center mb-5">

              <BadgeCheck className="text-pink-600" />

            </div>

            <h3 className="font-bold text-lg text-gray-800">
              Genuine Products
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              100% original paint products guaranteed.
            </p>

          </div>

          <div className="bg-white rounded-[25px] sm:rounded-[30px] shadow-xl p-6 text-center">

            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-yellow-100 flex items-center justify-center mb-5">

              <Star className="text-yellow-500" />

            </div>

            <h3 className="font-bold text-lg text-gray-800">
              Best Rated
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              Loved by customers for quality and service.
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">

          <div>

            <p className="text-indigo-600 font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
              Shop Collection
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-3">
              Explore Our Products
            </h2>

          </div>

          <button className="bg-[#111827] hover:bg-black text-white px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-3 transition duration-300 text-sm sm:text-base">

            View All Products

            <ArrowRight size={20} />

          </button>

        </div>

        <Card />

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] rounded-[30px] sm:rounded-[40px] overflow-hidden p-6 sm:p-8 lg:p-12 text-white relative">

          <div className="absolute top-0 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

            <div>

              <p className="uppercase tracking-[3px] text-indigo-300 text-xs sm:text-sm mb-4">
                Why Choose Us
              </p>

              <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                Trusted By Hundreds <br />
                Of Happy Customers
              </h2>

              <p className="mt-6 text-gray-300 leading-7 sm:leading-8 text-sm sm:text-lg">
                We provide premium paint products,
                waterproofing solutions, wall putty,
                modern finishes, and expert support.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                <Sparkles className="text-yellow-400 mb-4" size={34} />

                <h3 className="text-2xl sm:text-3xl font-bold">
                  500+
                </h3>

                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Happy Customers
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                <PaintBucket className="text-pink-400 mb-4" size={34} />

                <h3 className="text-2xl sm:text-3xl font-bold">
                  100+
                </h3>

                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Paint Products
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                <Truck className="text-green-400 mb-4" size={34} />

                <h3 className="text-2xl sm:text-3xl font-bold">
                  Fast
                </h3>

                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Delivery Service
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 sm:p-6">

                <ShieldCheck className="text-indigo-400 mb-4" size={34} />

                <h3 className="text-2xl sm:text-3xl font-bold">
                  100%
                </h3>

                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  Genuine Products
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-black text-white py-16 md:py-20 px-5 mt-10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[3px] text-indigo-400 text-xs sm:text-sm mb-4">
            Ready To Order
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Start Your Painting <br />
            Project Today
          </h2>

          <p className="mt-6 text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-7 sm:leading-8">
            Browse products, compare colors,
            and order premium paints easily.
          </p>

          <button className="mt-8 bg-[#4F46E5] hover:bg-[#4338CA] transition duration-300 px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg flex items-center gap-3 mx-auto">

            <ShoppingBag size={22} />

            Shop Products

          </button>

        </div>

      </section>

    </div>
  );
}

export default Shop;