import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, User, Search, ChevronDown, Menu, X, MapPin, UserCircle2, Package, HeartHandshake, LogOut, } from "lucide-react";

import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import websitelogo from "../../assets/websitelogo.png";
import Login from "../Auth/login";
import Signup from "../Auth/signup";
import TopOffer from "../../components/topoffer";

function Navbar() {
  const [openMenu, setOpenmenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);

  console.log(openLogin);
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Categories",
      path: "categories",
      dropdown: true,
      items: [
        "Interior Paints",
        "Exterior Paints",
        "Wood Paints",
        "Wall Primers",
        "Tools & Accessories",
      ],
    },
    {
      name: "Features",
      dropdown: true,
      items: [
        "Color Preview",
        "Paint Calculator",
        "Fast Delivery",
        "Premium Brands",
        "Offers",
      ],
    },
    { name: "Brands", path: "/brands" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm 
         ${ShowSearch ? "rounded-b-3xl" : ""}`}>
        <TopOffer />
        <motion.div className="max-w-[1500px] mx-auto px-3 sm:px-4 lg:px-8 ">
          <div className="h-[52px] md:h-[78px] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 md:gap-4 lg:gap-8 flex-1">
              <button onClick={() => setOpenmenu(true)}
                className="lg:hidden w-8 h-8 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                <Menu size={18} />
              </button>

              <Link to="/" className="flex items-center   shrink-0">
                <img src={websitelogo} alt="logo" className="h-10 sm:h-11 md:h-12 w-auto object-contain" />
                <div className="flex flex-col leading-none">
                  <h1 className="text-[18px] lg:text-[22px] md:text-[24px] font-extrabold tracking-tight text-gray-900">
                    Paint
                    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      Store
                    </span>
                  </h1>
                  <p className="text-[8px] sm:text-[11px] lg:text-[10px] text-gray-500 font-medium tracking-wide mt-1">
                    Premium Paint Store
                  </p>
                </div>
              </Link>

              {/* DESKTOP LINKS */}
              <div className="hidden lg:flex items-center gap-8 ml-3">
                <div className="hidden lg:flex items-center gap-8 ml-3">
                  {navLinks.map((link) => (
                    link.dropdown ? (
                      <div
                        key={link.name}
                        className="relative group">
                        <Link to={link.path} className="flex items-center gap-1 text-[14px] font-semibold text-gray-800 hover:text-purple-600 transition">
                          {link.name}
                          <ChevronDown
                            size={16}
                            className="group-hover:rotate-180 transition duration-300" />
                        </Link>
                        {/* DROPDOWN */}
                        <div className="absolute top-10 left-0 w-[270px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="grid gap-3">
                            {link.items.map((item) => (
                              <Link to={`${link.name}/${item.toLowerCase().replace(/\s+/g, "")}`} key={item}
                                className="text-left px-4 py-3 rounded-2xl hover:bg-purple-50 hover:text-purple-600 transition font-medium">
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) => `text-[14px] font-semibold transition ${isActive
                          ? "text-purple-600" : "text-gray-800 hover:text-purple-600"}`}>
                        {link.name}
                      </NavLink>)
                  ))}
                </div>
              </div>
            </div>

            {/* SEARCH */}
            <div className="hidden md:flex flex-1 max-w-[400px] xl:max-w-[400px] relative">
              <Search
                size={20}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search for paints, products..."
                className="w-full h-[43px] rounded-full bg-gray-100 border border-transparent focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none pl-5 pr-5 text-sm" />
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
              {/* SEARCH MOBILE */}
              <button onClick={() => { setShowSearch(!ShowSearch) }} className="md:hidden w-9 h-8 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Search size={17} />
              </button>
              {/* MAP */}
              <a href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7" target="_blank" rel="noopener noreferrer"
                className="relative hidden 2xl:flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg group">

                {/* ICON */}
                <MapPin size={18} className="shrink-0" />

                {/* TOOL TIP */}
                <span className="absolute -top-11 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap">
                  Visit Store
                  <span className="absolute left-1/2 -translate-x-1/2 top-full border-8 border-transparent border-t-black"></span>
                </span>
              </a>

              {/* WHATSAPP */}
              <a href="https://wa.me/919368477303" target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-[45px] h-[45px] md:w-[48px] md:h-[48px] rounded-full bg-green-500 text-white shadow-lg hover:scale-105 transition">
                <FaWhatsapp className="text-[22px]" />
              </a>

              <Link to="/addtocart"
                className="hidden lg:flex relative w-8 h-8 md:w-[48px] md:h-[48px] rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
                <ShoppingCart size={17} />

                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </Link>

              {/* PROFILE */}
              <div className="relative  md:block group">

                <button className="w-8 h-8 lg:h-[52px] lg:w-[52px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-50 hover:text-purple-600 transition">
                  <User size={20} />
                </button>

                {/* DROPDOWN */}
                <div className="absolute top-14 right-0 w-[290px] bg-white rounded-[30px] shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

                  {/* TOP */}
                  <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <h3 className="text-lg font-bold">
                      Welcome Back
                    </h3>
                    <p className="text-sm opacity-90 mt-1">
                      Access your account
                    </p>
                    <button
                      onClick={() => setOpenLogin(true)}
                      className="mt-4 bg-white text-purple-600 px-5 py-2 rounded-full font-semibold text-sm hover:scale-105 transition">
                      Login
                    </button>
                  </div>
                  {/* LINKS */}
                  <div className="p-3">
                    {[
                      {
                        icon: <UserCircle2 size={20} />,
                        name: "My Profile",
                        path: "/profile",
                      },
                      {
                        icon: <Package size={20} />,
                        name: "Orders",
                        path: "/orders",
                      },
                      {
                        icon: <HeartHandshake size={20} />,
                        name: "Wishlist",
                        path: "/wishlist",
                      },
                      {
                        icon: <MapPin size={20} />,
                        name: "Saved Address",
                        path: "/address",
                      },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-gray-100 transition font-medium text-gray-700"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}

                  </div>

                  {/* LOGOUT */}
                  <div className="p-3 border-t">

                    <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-red-50 text-red-500 transition font-medium">
                      <LogOut size={20} />
                      Logout
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* MOBILE SEARCH */}

          <AnimatePresence>

            {ShowSearch && (

              <motion.div

                initial={{
                  opacity: 0,
                  height: 0,
                  y: -25,
                }}

                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  height: 0,
                  y: -25,
                }}

                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className="md:hidden overflow-hidden"
              >

                {/* SEARCH WRAPPER */}
                <motion.div

                  initial={{
                    scale: 0.95,
                    opacity: 0,
                  }}

                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}

                  exit={{
                    scale: 0.95,
                    opacity: 0,
                  }}

                  transition={{
                    delay: 0.1,
                    duration: 0.35,
                  }}

                  className="pb-2 pt-1"
                >

                  <div className="relative">

                    {/* ICON */}
                    <Search
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    {/* INPUT */}
                    <input
                      type="text"
                      placeholder="Search paints..."
                      className="w-full h-[30px] rounded-full bg-gray-100 border border-transparent focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none pl-12 pr-12 text-[12px] shadow-sm"
                    />

                    {/* CLOSE */}
                    <button
                      onClick={() => setShowSearch(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow flex items-center justify-center"
                    >
                      <X size={12} />
                    </button>

                  </div>

                </motion.div>

              </motion.div>

            )}

          </AnimatePresence>
        </motion.div>
      </header>

      <div className="h-[130px]" />

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-white z-[9999] lg:hidden">

            <div className="flex items-center justify-between p-5 border-b">
              <Link to="/" className="flex items-center   shrink-0">
                <img src={websitelogo} alt="logo" className="h-10 sm:h-11 md:h-12 w-auto object-contain" />
                <div className="flex flex-col leading-none">
                  <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-extrabold tracking-tight text-gray-900">
                    Paint
                    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      Store
                    </span>
                  </h1>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-wide mt-1">
                    Premium Paint Store
                  </p>
                </div>
              </Link>

              <button onClick={() => setOpenmenu(false)}>
                <X size={30} />
              </button>

            </div>

            <div className="flex flex-col gap-7 p-8 text-lg font-semibold">

              <Link to="/" onClick={() => setOpenmenu(false)}>
                Home
              </Link>

              <Link to="Features/products" onClick={() => setOpenmenu(false)}>
                Products
              </Link>

              <Link to="Features//brands" onClick={() => setOpenmenu(false)}>
                Brands
              </Link>

              <Link to="Features/colorpreview" onClick={() => setOpenmenu(false)}>
                Color Preview
              </Link>

              <Link to="Features/paintcalculator" onClick={() => setOpenmenu(false)}>
                Paint Calculator
              </Link>

              <Link to="Features/offers" onClick={() => setOpenmenu(false)}>
                Offers
              </Link>

              <Link to="Features/contact" onClick={() => setOpenmenu(false)}>
                Contact
              </Link>

              <a
                href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black-600 text-white py-4 rounded-2xl mt-4">

                <MapPin size={22} />

                Visit Our Store

              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* LOGIN MODAL */}
      {openLogin && (
        <Login
          closeModal={() => setOpenLogin(false)}
          openSignup={() => {
            setOpenLogin(false);
            setOpenSignup(true);
          }}
        />
      )}

      {openSignup && (
        <Signup
          closeModal={() => setOpenSignup(false)}
          openLogin={() => {
            setOpenSignup(false);
            setOpenLogin(true);
          }}
        />
      )}
    </>
  );
}

export default Navbar;