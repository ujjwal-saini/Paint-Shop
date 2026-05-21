import React from "react";
import Brands from "../../components/brands";
import {
  BadgeCheck,
  PaintBucket,
  Truck,
  ShieldCheck,
} from "lucide-react";

function BrandPage() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">

      <section className="relative bg-gradient-to-r from-[#0B1238] via-indigo-800 to-purple-700 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[4px] text-indigo-200 mb-4">
                Premium Paint Brands
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Trusted Paint <br />
                Brands Collection
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
                Discover top-quality paint brands for interiors,
                exteriors, waterproofing, wood coatings, and
                decorative finishes.
              </p>

              <button className="mt-8 bg-white text-[#0B1238] px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl">
                Explore Brands
              </button>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-[40px] p-8 sm:p-12 shadow-2xl">
                <PaintBucket
                  size={120}
                  className="text-white sm:w-[140px] sm:h-[140px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Popular Paint Brands
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from trusted and professional paint brands
            used by homeowners, architects, and painters.
          </p>
        </div>

        <div className="bg-white rounded-[35px] shadow-2xl p-5 sm:p-8 md:p-10">
          <Brands />
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">
            <BadgeCheck
              className="text-indigo-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Trusted Quality
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              We provide only genuine and trusted paint brands.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">
            <PaintBucket
              className="text-pink-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Premium Finishes
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Luxury matte, glossy, metallic, and textured finishes.
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
              Quick and safe delivery for all paint products.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">
            <ShieldCheck
              className="text-blue-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Long Protection
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Durable coatings with long-lasting wall protection.
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-[35px] p-6 sm:p-10 md:p-14">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                Why Choose Premium Paint Brands?
              </h2>

              <p className="mt-6 text-gray-700 leading-8 text-sm sm:text-base">
                Premium paint brands provide better wall coverage,
                smoother finish, waterproof protection, long-lasting
                colors, and easy maintenance for homes and offices.
              </p>

              <ul className="mt-6 space-y-4 text-gray-700 text-sm sm:text-base">
                <li>✔ Better wall coverage</li>
                <li>✔ Long-lasting colors</li>
                <li>✔ Waterproof protection</li>
                <li>✔ Dust & stain resistance</li>
                <li>✔ Smooth premium finish</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Paint Buying Tips
              </h3>

              <div className="space-y-5">

                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-800">
                    Interior Paints
                  </h4>

                  <p className="text-sm text-gray-600 mt-2 leading-6">
                    Use washable and low-odor paints for bedrooms
                    and living rooms.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-800">
                    Exterior Paints
                  </h4>

                  <p className="text-sm text-gray-600 mt-2 leading-6">
                    Choose waterproof and UV-resistant coatings
                    for outdoor walls.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Wood Coatings
                  </h4>

                  <p className="text-sm text-gray-600 mt-2 leading-6">
                    Apply primer before polish for better shine
                    and durability.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#0B1238] text-white py-16 md:py-20 px-5">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Help Selecting Paint Brands?
          </h2>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Our paint experts will help you choose the perfect
            paint brand for your home, office, or project.
          </p>

          <button className="mt-8 bg-white text-[#0B1238] hover:bg-gray-100 transition duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            Contact Experts
          </button>

        </div>

      </section>

    </div>
  );
}

export default BrandPage;