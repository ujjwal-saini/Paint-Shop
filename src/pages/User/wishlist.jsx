import React from "react";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Star,
} from "lucide-react";

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "Asian Paints Royale",
      price: "₹1,499",
      oldPrice: "₹1,899",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800",
    },
    {
      id: 2,
      name: "Berger Silk Luxury",
      price: "₹1,250",
      oldPrice: "₹1,550",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
    },
    {
      id: 3,
      name: "Nerolac Beauty Gold",
      price: "₹999",
      oldPrice: "₹1,299",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
    },
    {
      id: 4,
      name: "Wood Finish Polish",
      price: "₹799",
      oldPrice: "₹999",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-24">

      {/* HEADER */}
      <div className="bg-white sticky top-0 z-20 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shadow-md">
              <Heart size={22} className="text-white fill-white" />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                My Wishlist
              </h1>
              <p className="text-sm text-gray-500">
                Saved paint products
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-xl font-semibold">
            {wishlistItems.length} Items
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto p-4">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 md:h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Remove Button */}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                  <Trash2 size={18} />
                </button>

                {/* Wishlist Badge */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Wishlist
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">

                {/* Product Name */}
                <h2 className="font-semibold text-gray-800 line-clamp-1">
                  {item.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <Star
                    size={15}
                    className="text-yellow-500 fill-yellow-500"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    {item.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-lg font-bold text-orange-500">
                    {item.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">

                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-2xl text-sm font-semibold transition flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Add
                  </button>

                  <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
                    <Heart
                      size={18}
                      className="text-red-500 fill-red-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {wishlistItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24">

            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
              <Heart size={40} className="text-orange-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-700 mt-5">
              Wishlist Empty
            </h2>

            <p className="text-gray-500 mt-2 text-center">
              Save your favorite paint products here.
            </p>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition">
              Explore Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;

