import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from 'react-router-dom'
import websitelogo from "../../assets/websitelogo.png";
function SideMobilebar({ setOpenmenu }) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);

  return (
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

        {/* Categories Dropdown */}
        <div>
          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="flex justify-between items-center w-full cursor-pointer"
          >
            Categories
            <span className='cursor-pointer'>{openCategory ? "−" : "+"}</span>
          </button>

          {openCategory && (
            <div className="flex flex-col gap-3 pl-4 mt-3 text-base font-medium">
              <Link to="/categories/interior-paints" onClick={() => setOpenmenu(false)}>
                Interior Paints
              </Link>

              <Link to="/categories/exterior-paints" onClick={() => setOpenmenu(false)}>
                Exterior Paints
              </Link>

              <Link to="/categories/wood-paints" onClick={() => setOpenmenu(false)}>
                Wood Paints
              </Link>

              <Link to="/categories/wall-primers" onClick={() => setOpenmenu(false)}>
                Wall Primers
              </Link>

              <Link to="/categories/tools-accessories" onClick={() => setOpenmenu(false)}>
                Tools & Accessories
              </Link>
            </div>
          )}
        </div>

        {/* Features Dropdown */}
        <div>
          <button
            onClick={() => setOpenFeatures(!openFeatures)}
            className="flex justify-between items-center w-full cursor-pointer"
          >
            Features
            <span className='cursor-pointer'>{openFeatures ? "−" : "+"}</span>
          </button>

          {openFeatures && (
            <div className="flex flex-col gap-3 pl-4 mt-3 text-base font-medium">
              <Link to="/Features/colorpreview" onClick={() => setOpenmenu(false)}>
                Color Preview
              </Link>

              <Link to="/Features/paintcalculator" onClick={() => setOpenmenu(false)}>
                Paint Calculator
              </Link>

              <Link to="/Features/products" onClick={() => setOpenmenu(false)}>
                Products
              </Link>

              <Link to="/Features/offers" onClick={() => setOpenmenu(false)}>
                Offers
              </Link>
            </div>
          )}
        </div>

        <Link to="/brands" onClick={() => setOpenmenu(false)}>
          Brands
        </Link>

        <Link to="/offers" onClick={() => setOpenmenu(false)}>
          Offers
        </Link>

        <Link to="/contact" onClick={() => setOpenmenu(false)}>
          Contact
        </Link>

      </div>
    </motion.div>
  )
}

export default SideMobilebar