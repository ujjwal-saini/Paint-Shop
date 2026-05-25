import React from 'react'
import paintbg from '../../assets/paintbg.png'
import { motion } from "framer-motion";

function Home() {


  return (
    <div className='w-full  h-[44vh]  lg:h-screen overflow-hidden relative'>

      <img src={paintbg} alt="Paint Background" className='w-full h-[44vh]  lg:h-screen object-cover' />

      <div className='absolute inset-0 flex top-5  h-[44vh]  lg:top-20'>

        <div className='pl-4 pr-[50px] w-[500px] h-[40vh]  md:px-3 lg:px-16 max-w-2xl'>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className='text-3xl pr-[80px] sm:text-4xl md:text-5xl lg:text-6xl lg:pr-[0px] font-bold text-black leading-tight'>
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
            className='mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-800 font-bold max-w-lg'>
            Premium paints for every surface.
            Beautiful colors. Long lasting results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
            className='flex   sm:flex-row gap-4 mt-6 md:mt-8'>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] px-5 py-2 sm:px-6 sm:py-2.5
               md:px-8 md:py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-600 text-white font-semibold shadow-lg">
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='text-[14px] sm:text-[13px] md:text-[15px] lg:text-[16px] px-5 py-3 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-2xl bg-white text-black font-semibold shadow-lg' >
              Try Color Preview
            </motion.button>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Home