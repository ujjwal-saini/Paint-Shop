import React, { useState } from "react";
import { Heart, ShoppingCart, Eye, Star, Plus, Minus, } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
  const [cart, setCart] = useState({});

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
    if (cart[id] === 1) {
      const updated = { ...cart };
      delete updated[id];
      setCart(updated);
      return;
    }

    setCart((prev) => ({
      ...prev,
      [id]: prev[id] - 1,
    }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group w-[280px] bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          {/* Product Image */}
          <div className="relative bg-gray-50 p-3 overflow-hidden">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
              -20%
            </span>

            <button className="absolute top-3 right-3 bg-white shadow-md p-2 rounded-full z-10 hover:text-red-500">
              <Heart size={16} />
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <Link to={`/categories/${product.id}`}
                className="w-full bg-blue-600 text-white py-2 flex justify-center items-center gap-2">
                <Eye size={16} />
                Quick View
              </Link>
            </div>
          </div>

          {/* Product Content */}
          <div className="p-4">
            <p className="text-xs text-gray-500 uppercase">
              Interior Paint
            </p>

            <h3 className="font-semibold text-gray-800 mt-1 line-clamp-2 min-h-[48px]">
              {product.name}
            </h3>

            <div className="flex items-center gap-1 mt-2">
              <Star
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="text-sm text-gray-600">
                {product.rating}
              </span>
              <span className="text-xs text-gray-400">
                (128 Reviews)
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-xl font-bold text-blue-700">
                PKR {product.price}
              </span>

              <span className="text-sm text-gray-400 line-through">
                PKR 5500
              </span>
            </div>

            {/* Cart Section */}
            <div className="mt-4">
              {!cart[product.id] ? (
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add To Cart
                </button>
              ) : (
                <div className="flex items-center justify-between   rounded-xl px-3 py-2">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-700"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="font-bold text-lg">
                    {cart[product.id]}
                  </span>

                  <button
                    onClick={() => increaseQty(product.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-700"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;