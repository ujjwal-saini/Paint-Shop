import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingCart,
  User,
  Search,
  ChevronDown,
  Menu,
  X,
  MapPin,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import logo2 from "../../assets/logo2.png";

function Navbar() {
  const [openMenu, setOpenmenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands" },
    { name: "Color Preview", path: "/colorpreview" },
    { name: "Paint Calculator", path: "/paintcalculator" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
        <div className="max-w-[1500px] mx-auto px-4 lg:px-8 py-3">

          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-6 flex-1">

              <Link to="/">
                <img
                  src={logo2}
                  alt="logo"
                  className="h-12 object-contain"
                />
              </Link>

              <div className="hidden md:flex relative flex-1 max-w-[600px]">
                <Search
                  size={20}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search paints..."
                  className="w-full pl-12 pr-5 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-5">

              <button className="hidden sm:block hover:text-red-500 transition">
                <Heart />
              </button>

              <button className="relative hover:text-purple-600 transition">
                <ShoppingCart />

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              <button className="hidden md:block hover:text-purple-600 transition">
                <User />
              </button>

              <a
                href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition"
              >
                <MapPin size={18} />

                <span className="text-sm font-medium">
                  Visit Store
                </span>
              </a>

              <a
                href="https://wa.me/919368477303"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition"
              >
                <FaWhatsapp className="text-green-500 text-2xl" />

                <span className="text-sm font-medium">
                  Order on WhatsApp
                </span>
              </a>

              <button
                onClick={() => setOpenmenu(true)}
                className="lg:hidden"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>

          <div className="md:hidden mt-4 flex justify-center items-center gap-2">

            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search paints..."
                className="w-full pl-12 pr-3 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400" />
            </div>

            <a
              href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white shrink-0">
              <MapPin size={18} />
            </a>

          </div>
        </div>

        <div className="hidden md:block border-t bg-white">
          <div className="max-w-[1000px] mx-auto flex items-center gap-8 px-6 py-4">

            <div className="relative group">
              <Link
                to={"/products"}
                className="flex items-center gap-1 text-sm font-medium hover:text-purple-600 transition"
              >
                Products
                <ChevronDown size={16} />
              </Link>

              <div className="absolute top-8 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-xl rounded-2xl p-5 w-[250px] z-50">

                <ul className="space-y-3 text-sm">

                  {[
                    "Primer Paints",
                    "Emulsion Paints",
                    "Waterproof Paints",
                    "Wall Putty",
                    "Spray Paints",
                    "Wood Polish",
                  ].map((item) => (
                    <li
                      key={item}
                      className="hover:text-purple-600 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}

                </ul>

              </div>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition whitespace-nowrap ${isActive
                    ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                    : "hover:text-purple-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>
        </div>
      </header>

      <div className="h-[130px]" />

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-white z-[9999] lg:hidden"
          >

            <div className="flex items-center justify-between p-5 border-b">

              <img
                src={logo2}
                alt="logo"
                className="h-10 object-contain"
              />

              <button onClick={() => setOpenmenu(false)}>
                <X size={30} />
              </button>

            </div>

            <div className="flex flex-col gap-7 p-8 text-lg font-semibold">

              <Link to="/" onClick={() => setOpenmenu(false)}>
                Home
              </Link>

              <Link to="/products" onClick={() => setOpenmenu(false)}>
                Products
              </Link>

              <Link to="/brands" onClick={() => setOpenmenu(false)}>
                Brands
              </Link>

              <Link to="/colorpreview" onClick={() => setOpenmenu(false)}>
                Color Preview
              </Link>

              <Link to="/paintcalculator" onClick={() => setOpenmenu(false)}>
                Paint Calculator
              </Link>

              <Link to="/offers" onClick={() => setOpenmenu(false)}>
                Offers
              </Link>

              <Link to="/contact" onClick={() => setOpenmenu(false)}>
                Contact
              </Link>

              <a
                href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black-600 text-white py-4 rounded-2xl mt-4"
              >

                <MapPin size={22} />

                Visit Our Store

              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;