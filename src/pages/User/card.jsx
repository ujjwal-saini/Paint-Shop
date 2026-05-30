import React, { useMemo, useState } from "react";
import { Search, Minus, Plus, ShoppingCart } from "lucide-react";

function Card() {
  const products = [
    {
      "id": 1,
      "name": "Asian Paints Royale Luxury Emulsion",
      "category": "Interior",
      "price": 2499,
      "discountPrice": 1899,
      "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=500&auto=format&fit=crop"
    },
    {
      "id": 2,
      "name": "Berger Weather Coat Anti Dust",
      "category": "Exterior",
      "price": 3299,
      "discountPrice": 2699,
      "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=500&auto=format&fit=crop"
    },
    {
      "id": 3,
      "name": "Nerolac Beauty Gold Washable",
      "category": "Interior",
      "price": 1999,
      "discountPrice": 1599,
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
    },
    {
      "id": 4,
      "name": "Dulux Velvet Touch Shine",
      "category": "Premium",
      "price": 4299,
      "discountPrice": 3499,
      "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500&auto=format&fit=crop"
    },
    {
      "id": 5,
      "name": "Nerolac Beauty Gold Washable",
      "category": "Interior",
      "price": 1999,
      "discountPrice": 1599,
      "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
    },
    {
      "id": 6,
      "name": "Dulux Velvet Touch Shine",
      "category": "Premium",
      "price": 4299,
      "discountPrice": 3499,
      "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500&auto=format&fit=crop"
    }
  ]

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState({});

  const categories = ["All", "Interior", "Exterior", "Premium"];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter =
        filter === "All" || item.category === filter;

      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: 1,
    }));
  };

  const increaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }

      return updated;
    });
  };

  const totalCartItems = Object.values(cart).reduce(
    (acc, item) => acc + item,
    0
  );

  return (
    <div className="min-h-screen mt-7">
      <div className="w-full mx-auto">

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2.5 rounded-2xl font-medium transition-all ${filter === item
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[30px] overflow-hidden border border-[#ececec] hover:shadow-2xl transition-all duration-500 group "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden bg-gradient-to-b from-[#fff7ed] to-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-50 object-cover group-hover:scale-110 transition-all duration-500"
                />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow">
                  {item.category}
                </div>

                {/* OFFER */}

              </div>

              {/* CONTENT */}
              <div className="px-3 py-3">

                <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                  {item.name}
                </h2>


                <p className="text-gray-500 text-sm mt-1 leading-6">
                  Premium washable wall paint with smooth luxury finish.
                </p>

                {/* PRICE */}
                <div className="flex justify-between items-center gap-2 mt-2">
                  <h3 className="text-lg font-bold text-black-500">
                    ₹{item.price}
                  </h3>

                  <span className="text-sm text-gray-400 line-through">
                    ₹3999
                  </span>
                  <div className=" bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    20% OFF
                  </div>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
                    4.5 ★
                  </div>

                  <span className="text-sm text-gray-500">
                    120 Reviews
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="mt-6">
                  {!cart[item.id] ? (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-full h-10 rounded-2xl bg-secondary hover:scale-[1.02] text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add To Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-[#f5f5f5] rounded-2xl px-3 py-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center hover:bg-red-50 transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="font-bold text-lg">
                        {cart[item.id]}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center hover:bg-blue-600 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-3xl p-10 text-center mt-16 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">
              No Products Found
            </h2>
            <p className="text-gray-500 mt-2">
              Try searching another product name.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
