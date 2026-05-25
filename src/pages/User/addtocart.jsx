import React, { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, } from "lucide-react";
import paint1 from "../../assets/paintbg.png";

function Addtocart() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wall Paint",
      price: 1299,
      qty: 1,
      image: paint1,
    },

    {
      id: 2,
      name: "Waterproof Exterior Paint",
      price: 1899,
      qty: 2,
      image: paint1,
    },
  ]);

  // INCREASE QTY
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  // TOTAL
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-8 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">

          <div>

            <p className="text-sm uppercase tracking-[3px] text-purple-600 font-semibold">
              Your Cart
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Shopping Cart
            </h1>

          </div>

          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-md">

            <ShoppingBag className="text-purple-600" />

            <p className="font-semibold text-gray-700">
              {cartItems.length} Items
            </p>

          </div>

        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* LEFT */}
          <div className="space-y-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-[30px] shadow-lg p-4 md:p-5 flex flex-col sm:flex-row gap-5"
              >

                {/* IMAGE */}
                <div className="w-full sm:w-[170px] h-[170px] rounded-[25px] overflow-hidden shrink-0">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>

                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-gray-500 text-sm leading-6">
                      Premium quality paint with smooth finishing
                      and long lasting durability.
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-purple-600">
                      ₹{item.price}
                    </h3>

                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-5">

                    {/* QTY */}
                    <div className="flex items-center bg-gray-100 rounded-full p-1">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="px-5 font-bold text-lg">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus size={18} />
                      </button>

                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-600"
                    >

                      <Trash2 size={18} />

                      Remove

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white rounded-[35px] shadow-xl p-6 md:p-8 sticky top-24">

              <h2 className="text-2xl font-bold text-gray-800">
                Order Summary
              </h2>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between text-gray-600">
                  <p>Subtotal</p>
                  <p>₹{totalPrice}</p>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <p>Tax</p>
                  <p>₹199</p>
                </div>

                <div className="border-t pt-5 flex items-center justify-between">

                  <h3 className="text-xl font-bold text-gray-900">
                    Total
                  </h3>

                  <h3 className="text-2xl font-bold text-purple-600">
                    ₹{totalPrice + 199}
                  </h3>

                </div>

              </div>

              {/* BUTTON */}
              <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-3">

                Proceed To Checkout

                <ArrowRight size={22} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Addtocart;