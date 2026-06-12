import React, { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./productCard";

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState("")
  const categories = [
    { name: "Interior Paints", total: 24 },
    { name: "Exterior Paints", total: 18 },
    { name: "Wood Paints", total: 14 },
    { name: "Metal Paints", total: 10 },
    { name: "Primers", total: 8 },
    { name: "Paint Accessories", total: 22 },
  ];

  const products = [
    {
      id: 1,
      name: "ColorCraft Interior Emulsion Paint",
      price: "4,500",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=500",
    },
    {
      id: 2,
      name: "ColorCraft Interior Silk Finish",
      price: "5,200",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500",
    },
    {
      id: 3,
      name: "ColorCraft Interior Matte Finish",
      price: "3,900",
      rating: "4.4",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500",
    },
    {
      id: 4,
      name: "Nippon Paint Vinilex Interior",
      price: "4,800",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
    },
    {
      id: 5,
      name: "Dulux Easy Clean",
      price: "5,500",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    },
    {
      id: 6,
      name: "Berger Silk Glamour",
      price: "6,200",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
    },
    {
      id: 7,
      name: "Premium Quality Paint",
      price: "4,100",
      rating: "4.3",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500",
    },
    {
      id: 8,
      name: "Nippon Odour-less",
      price: "5,300",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen px-4 py-2">

      <div className="flex flex-col md:flex-row justify-between mb-2 gap-4">

        <p className="text-sm text-gray-500 mb-3">
          Home / Shop / Interior Paints
        </p>
        <p className="text-gray-500">
          Showing 1-12 of 24 products
        </p>

        <select className="border rounded-lg px-4 py-2 bg-white">
          <option>Sort by: Popularity</option>
          <option>Newest</option>
          <option>Price Low To High</option>
          <option>Price High To Low</option>
        </select>

      </div>

      {/* Shop Section */}
      <div className="max-w-full mx-auto ">

        <div className="flex  gap-6">

          {/* Sidebar */}
          <aside className="lg:flex-3 space-y-5">

            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="font-semibold mb-4">
                Categories
              </h3>

              <div className="space-y-3">
                {categories.map((item, index) => (
                  <button
                    key={item.name}
                    className={`flex w-full justify-between items-center cursor-pointer font-medium border-l-4 pl-2 py-1 rounded-l-2xl ${activeCategory == index ? "border-blue-300 bg-blue-50 text-blue-950"
                      : "border-transparent"}`}
                    onClick={() => { setActiveCategory(index) }}
                  >
                    <div className="flex gap-2 items-center">

                      <span className="text-[15px]">
                        {item.name}
                      </span>
                    </div>

                    <span className="text-gray-400 text-sm">
                      ({item.total})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow ">
              <h2 className="border-b-1 border-gray-200 text-[18px] font-semibold py-2 pl-5"> Filter</h2>
              <div className="p-4">
                <h3 className="font-semibold mb-4 ">
                  Price Range
                </h3>
                <input
                  type="range"
                  className="w-full"
                />
                <div className="flex justify-between mt-3 text-sm text-gray-500">
                  <span>PKR 500</span>
                  <span>PKR 10,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="font-semibold mb-4">
                Brand
              </h3>

              <div className="space-y-2">
                {["ColorCraft", "Nippon", "Dulux", "Berger"].map(
                  (brand) => (
                    <label
                      key={brand}
                      className="flex gap-2"
                    >
                      <input type="checkbox" />
                      <span>{brand}</span>
                    </label>
                  )
                )}
              </div>
            </div>

          </aside>

          {/* Products */}
          <main className="lg:col-span-9">
            <ProductCard products={products} />
          </main>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">

          <div>
            <h4 className="font-semibold">
              100% Original
            </h4>
            <p className="text-sm text-gray-500">
              Genuine products only
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Best Price
            </h4>
            <p className="text-sm text-gray-500">
              Market competitive rates
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Fast Delivery
            </h4>
            <p className="text-sm text-gray-500">
              Quick shipping available
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Expert Support
            </h4>
            <p className="text-sm text-gray-500">
              Professional guidance
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryPage;