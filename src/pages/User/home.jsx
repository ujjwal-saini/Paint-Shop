import React from 'react'
import paintbg from '../../assets/paintbg.png'
import { motion } from "framer-motion";

function Home() {
  console.log(paintbg)
  return (
    <div className='w-full min-h-screen overflow-hidden relative'>

      <img src={paintbg} alt="Paint Background" className='w-full h-screen object-cover' />

      <div className='absolute inset-0 flex items-center'>

        <div className='px-6 md:px-12 lg:px-20 max-w-2xl'>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight'>
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
              className='text-pink-500 inline-block'
            >
              Colors
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
            className='mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-700 max-w-lg'
          >
            Premium paints for every surface.
            Beautiful colors. Long lasting results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: false }}
            className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-8'>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-600 text-white font-semibold shadow-lg'>
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-semibold shadow-lg'>
              Try Color Preview
            </motion.button>

          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Home