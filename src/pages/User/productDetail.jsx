import React, { useState } from "react";
import { Heart, Star, Minus, Plus, RefreshCcw, } from "lucide-react";

function ProductDetail() {
  const [qty, setQty] = useState(0);

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQty((prev) => Math.max(0, prev - 1));
  };

  const addToCart = () => {
    setQty(1);
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iUXq5QRtfVs0pIBqRVGjUi6gVcw2VJB5b_Sn5ESbhw&s=10",
    "/paint2.png",
    "/paint3.png",
    "/paint4.png",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-3 lg:py-8">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-1.5 lg:mb-6">
          Home / Shop / Interior Paints
        </p>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">

          {/* Left Side */}
          <div className="flex gap-4 h-[220px] lg:h-[370px]">

            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-xl border overflow-hidden
                  ${activeImage === img
                      ? "border-blue-600"
                      : "border-gray-200"
                    }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1  lg:rounded-3xl lg:shadow px-4 py-2 relative">

              <button className="absolute top-5 right-5">
                <Heart />
              </button>

              <img
                src={activeImage}
                alt=""
                className="w-full h-full lg:h-[300px] object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            <span className="hidden lg:inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              In Stock
            </span>

            <h1 className="text-[18px] lg:text-2xl font-bold lg:mt-4">
              ColorCraft Interior Emulsion Paint
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className=" text-sm text-gray-500">
                4.5 (128 Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-3">
              <h2 className="text-sm lg:text-xl font-bold text-blue-600">
                $ 4,500
              </h2>

              <span className="text-sm  line-through text-gray-400">
                $ 6,000
              </span>

              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm  ">
                10% OFF
              </span>
            </div>

            <p className=" hidden lg:block text-gray-600 text-sm mt-3">
              High quality interior emulsion paint with
              smooth finish and long lasting protection.
            </p>

            {/* Features */}
            <div className="hidden lg:grid grid-cols-2 gap-2 mt-4 text-[12px]">
              <div>✓ Smooth Finish</div>
              <div>✓ Washable</div>
              <div>✓ Low Odor</div>
              <div>✓ Long Lasting</div>
            </div>

            {/* Sizes */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">
                Size
              </h4>

              <div className="flex gap-3 flex-wrap">
                <button className="border px-3 py-2 rounded-xl">
                  1L
                </button>

                <button className="border-2 border-blue-600 text-blue-600 px-3 py-2 rounded-xl">
                  4L
                </button>

                <button className="border px-3 py-2 rounded-xl">
                  10L
                </button>

                <button className="border px-3 py-2 rounded-xl">
                  20L
                </button>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-2">
              <h4 className="font-semibold mb-3">
                Colors
              </h4>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-red-700 rounded-full"></div>
                <div className="w-8 h-8 bg-green-700 rounded-full"></div>
                <div className="w-8 h-8 bg-purple-700 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
            </div>

            <div
              className="
    fixed bottom-0 left-0 right-0
    bg-white border-t p-3 z-50
    flex gap-3

    md:static
    md:bg-transparent
    md:border-0
    md:p-0
    md:mt-8
  "
            >
              {/* Cart Section */}
              <div className="flex-1">
                {qty === 0 ? (
                  <button
                    onClick={addToCart}
                    className=" cursor-pointer w-full  hover:bg-blue-700
                    hover:text-white text-blue-700 border py-3 rounded-xl font-medium transition"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between text-blue-700 border  rounded-xl px-4 py-3">
                    <button
                      onClick={decreaseQty}
                      className="cursor-pointer p-1 rounded"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="font-semibold text-lg">
                      {qty}
                    </span>

                    <button
                      onClick={increaseQty}
                      className="cursor-pointer p-1 rounded"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                )}
              </div>

              {/* Buy Now */}
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition cursor-pointer">
                Buy Now
              </button>
            </div>

            {/* Wishlist */}
            <div className="flex gap-6 mt-6 text-gray-600">
              <button className="flex gap-2">
                <Heart size={18} />
                Wishlist
              </button>

              <button className="flex gap-2">
                <RefreshCcw size={18} />
                Compare
              </button>
            </div>

          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border mt-12">

          <div className="flex gap-8 border-b px-6">
            <button className="py-4 border-b-2 border-blue-600 text-blue-600">
              Description
            </button>

            <button className="py-4">
              Additional Info
            </button>

            <button className="py-4">
              Reviews (126)
            </button>
          </div>

          <div className="p-6">
            <p className="text-gray-600">
              Premium interior paint designed
              for smooth finish and durability.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;