import React from 'react'
import paintbg from '../../assets/paintbg.png'
import bg1 from '../../assets/bg1.png'
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Headphones } from "lucide-react";
import Navbar from './navbar';

function Home() {
  return (
    <div className='w-full lg:h-auto overflow-hidden relative'>
      <img src={bg1} alt="Paint Background" className='w-full h-[35vh]  opacity-90 lg:h-[calc(100vh-130px)] object-cover' />
      <div className='absolute inset-0 flex top-1    lg:top-2'>
        <div className='pl-4 pr-[10%] w-[500px] md:px-3 lg:px-16 max-w-2xl'>
          <motion.span className='text-[10px]  text-purple-600 bg-purple-200 py-1 px-2 rounded mt-2'> AI Powered</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className='text-[20px] mt-2 pr-[80px] sm:text-4xl md:text-5xl lg:text-5xl lg:pr-[0px] font-bold text-black leading-tight'>
            Bring Your Walls
            <br />
            to Life with{" "}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                delay: 0.2
              }}
              viewport={{ once: false }}
              className='text-pink-500 inline-block'>
              Colors
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
            className='mt-2 mr-[50%] md:mt-6 text-[11px] sm:text-base  md:text-lg lg:mr-0 lg:flex text-gray-600  max-w-lg'>
            Premium paints for every surface.
            Beautiful colors. Long lasting results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
            className='flex my-3 sm:flex-row gap-2 lg:gap-4 lg:mt-6 md:mt-3 lg:mb-10 mt-3 lg:mt-0'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden text-[10px] lg:block sm:text-[13px] md:text-[15px] lg:text-[16px] px-3 py-2 sm:px-6 sm:py-2.5
               md:px-8 md:py-3 rounded-2xl bg-third text-white font-semibold shadow-lg">
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='text-[10px] sm:text-[13px] md:text-[15px] lg:text-[16px] px-4 py-[9px] sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-[10px]  bg-purple-800 text-white font-semibold shadow-lg' >
              Try Color Preview
            </motion.button>
          </motion.div>

          <motion.div className="flex items-center gap-3 mt-5 lg:mt-0 "
          >
            {/* Original */}
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <ShieldCheck className="text-purple-600 w-4 h-4 lg:w-5 lg:h-6" />
              </div>
              <div className="flex lg:flex-col">
                <h2 className="text-[9px] font-semibold text-gray-800 lg:text-[13px]">
                  100% Original
                </h2>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-5 bg-gray-400 lg:h-10 "></div>

            {/* Delivery */}
            <div className="flex items-center gap-2">
              <div className="bg-pink-100 p-1 rounded-full">
                <Truck className="text-pink-600 w-4 h-4 lg:w-5 lg:h-6" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-[9px] font-semibold text-gray-800 lg:text-[13px]">
                  Free Delivery
                </h2>
                <p className="text-[9px] text-gray-500 lg:text-[13px]">
                  Above ₹999
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden w-[1px] h-10 bg-gray-400 lg:flex"></div>

            {/* Support */}
            <div className="hidden flex items-center gap-2 lg:flex">
              <div className="bg-orange-100 p-2 rounded-full">
                <Headphones className="text-orange-500 w-5 h-5" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-[13px] font-semibold text-gray-800">
                  Expert Support
                </h2>
                <p className="text-[11px] text-gray-500">
                  24/7 Help
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div >
    </div >
  )
}

export default Home