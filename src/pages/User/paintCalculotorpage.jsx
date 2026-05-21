import React from "react";
import PaintCalculator from "../../components/paintCalculator";
import {
  Paintbrush,
  Calculator,
  Droplets,
  ShieldCheck,
} from "lucide-react";

function PaintCalculotorpage() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Paint <br />
                Calculator
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
                Calculate exactly how much paint you need for your
                walls, ceilings, and rooms without wasting money.
              </p>

              <button className="mt-8 bg-white text-purple-700 px-7 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
                Start Calculating
              </button>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 sm:p-12 shadow-2xl">
                <Paintbrush
                  size={100}
                  className="sm:w-[130px] sm:h-[130px] text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Paint Requirement Calculator
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Enter your wall dimensions and get an instant estimate
            of paint quantity required for your home or office.
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-4 sm:p-6 md:p-10">
          <div className="w-full max-w-4xl mx-auto">
            <PaintCalculator />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 h-full">
            <Calculator
              className="text-purple-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold">
              Accurate Results
            </h3>

            <p className="text-gray-600 mt-3 leading-7 text-sm">
              Get precise paint estimates based on room dimensions.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 h-full">
            <Droplets
              className="text-blue-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold">
              Save Paint
            </h3>

            <p className="text-gray-600 mt-3 leading-7 text-sm">
              Avoid unnecessary paint wastage and reduce costs.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 h-full">
            <ShieldCheck
              className="text-green-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold">
              Professional Planning
            </h3>

            <p className="text-gray-600 mt-3 leading-7 text-sm">
              Plan your painting project like professionals.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 h-full">
            <Paintbrush
              className="text-pink-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold">
              Perfect Finish
            </h3>

            <p className="text-gray-600 mt-3 leading-7 text-sm">
              Buy the right amount of paint for smooth finishing.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-[35px] p-6 sm:p-10 md:p-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center md:text-left">
            How Paint Calculation Works?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-5">
                Basic Formula
              </h3>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <p className="text-lg font-medium text-purple-700">
                  Total Paint Required =
                </p>

                <p className="text-2xl sm:text-3xl font-bold mt-4">
                  Wall Area ÷ Paint Coverage
                </p>
              </div>

              <p className="mt-6 text-gray-700 leading-8 text-sm sm:text-base">
                Most paints cover approximately 120–150 sq.ft
                per litre depending on surface quality and
                number of coats.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">
                Tips Before Painting
              </h3>

              <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
                <li>✔ Always apply primer before painting.</li>
                <li>✔ Use 2 coats for best finish.</li>
                <li>✔ Measure doors/windows separately.</li>
                <li>✔ Waterproof walls before exterior painting.</li>
                <li>✔ Choose washable paints for kitchens.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Help Choosing Paints?
          </h2>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Contact our experts and get personalized paint
            recommendations for your home.
          </p>

          <button className="mt-8 bg-purple-600 hover:bg-purple-700 transition duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            Contact Experts
          </button>
        </div>
      </section>
    </div>
  );
}

export default PaintCalculotorpage;