import React, { useState } from "react";
import {
  Heart,
  Star,
  Minus,
  Plus,
  RefreshCcw,
} from "lucide-react";

function ProductDetail() {
  const [qty, setQty] = useState(1);

  const images = [
    "/paint1.png",
    "/paint2.png",
    "/paint3.png",
    "/paint4.png",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          Home / Shop / Interior Paints
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="flex gap-4">

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
            <div className="flex-1 bg-white rounded-3xl border p-8 relative">

              <button className="absolute top-5 right-5">
                <Heart />
              </button>

              <img
                src={activeImage}
                alt=""
                className="w-full h-[450px] object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              In Stock
            </span>

            <h1 className="text-4xl font-bold mt-4">
              ColorCraft Interior Emulsion Paint
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className="text-gray-500">
                4.5 (128 Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">
              <h2 className="text-4xl font-bold text-blue-600">
                PKR 4,500
              </h2>

              <span className="line-through text-gray-400">
                PKR 6,000
              </span>

              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
                10% OFF
              </span>
            </div>

            <p className="text-gray-600 mt-5">
              High quality interior emulsion paint with
              smooth finish and long lasting protection.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>✓ Smooth Finish</div>
              <div>✓ Washable</div>
              <div>✓ Low Odor</div>
              <div>✓ Long Lasting</div>
            </div>

            {/* Sizes */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">
                Size
              </h4>

              <div className="flex gap-3 flex-wrap">
                <button className="border px-5 py-2 rounded-xl">
                  1L
                </button>

                <button className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-xl">
                  4L
                </button>

                <button className="border px-5 py-2 rounded-xl">
                  10L
                </button>

                <button className="border px-5 py-2 rounded-xl">
                  20L
                </button>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-8">
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

            {/* Quantity */}
            <div className="mt-8 flex items-center gap-4">

              <div className="flex items-center border rounded-xl overflow-hidden">

                <button
                  onClick={() =>
                    qty > 1 && setQty(qty - 1)
                  }
                  className="px-4 py-3"
                >
                  <Minus />
                </button>

                <span className="px-6">
                  {qty}
                </span>

                <button
                  onClick={() =>
                    setQty(qty + 1)
                  }
                  className="px-4 py-3"
                >
                  <Plus />
                </button>
              </div>

              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium">
                Add To Cart
              </button>

              <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium">
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