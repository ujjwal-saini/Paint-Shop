import React from "react";
import { Link, useLocation } from "react-router-dom";
import { House, Store, MessageCircleMore, Heart, User, ShoppingCart } from "lucide-react";

function MobileBotNav() {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "Shop",
      path: "/shop",
      icon: Store,
    },
    {
      name: "Wishlist",
      path: "/wishlist",
      icon: Heart,
    },
    {
      name: "Account",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full z-50">

      {/* Bottom Nav */}
      <div className="relative bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] px-2 py-1 flex items-center justify-between">

        {/* Left Items */}
        <div className="flex items-center justify-around w-[40%]">
          {navItems.slice(0, 2).map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex flex-col items-center text-[10px] font-medium transition-all duration-200 ${isActive ? "text-purple-700" : "text-gray-500"
                  }`}
              >
                <div
                  className={`p-2 rounded-xl ${isActive ? "bg-orange-100" : ""
                    }`}>
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 bg-purple-900 rounded-full mt-1"></div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Empty Center Space */}
        <div className="w-[20%]"></div>

        {/* Right Items */}
        <div className="flex items-center justify-around w-[40%]">
          {navItems.slice(2).map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex flex-col items-center text-xs font-medium transition-all duration-200 ${isActive ? "text-purple-600" : "text-gray-500"
                  }`}
              >
                <div
                  className={`p-2 rounded-xl ${isActive ? "bg-orange-100" : ""
                    }`}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </div>

                {isActive && (
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1"></div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Floating Chat Button */}
        <Link
          to="/addtocart"
          className="absolute left-1/2 -translate-x-1/2 -top-2"
        >
          <div className="relative">

            {/* Notification */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-white">
              2
            </span>

            {/* Main Button */}
            <div className="w-12 h-12 rounded-full bg-purple-800 shadow-lg flex items-center justify-center border-4 border-white transition-all duration-300 active:scale-95">
              <ShoppingCart
                size={25}
                color="white"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileBotNav;