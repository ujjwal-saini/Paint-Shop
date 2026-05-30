import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PaintCalculator from '../../components/paintCalculator'
import Brands from '../../components/brands'
import Home from './home'
import Category from '../../components/category'
import Card from './card'
import { motion } from "framer-motion";
import Fotter from './fotter'
import AicolorChange from '../../components/aicolorChange'
import AIColorPreview from '../../components/colors/aIColorPreview'
import AIColorPreviewStrip from './homecolorpre'
import Allcolor from '../../components/colors/allcolor'



function Main() {
  const features = [
    {
      id: 1,
      title: "Original Products",
      image: "https://www.shutterstock.com/image-vector/100-original-product-badge-vector-260nw-2676380995.jpg",
    },
    {
      id: 2,
      title: "Best Prices",
      image: "https://static.vecteezy.com/system/resources/thumbnails/027/787/259/small/black-round-best-price-with-ribbon-for-badge-icon-stamp-label-logo-sign-guarantee-seal-emblem-sticker-elegant-and-modern-illustration-vector.jpg",
    },
    {
      id: 3,
      title: "Same Day Delivery",
      image: "https://img.freepik.com/premium-vector/same-day-delivery-rubber-stamp-seal-vector_140916-44966.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 4,
      title: "Expert Advice",
      image: "https://www.shutterstock.com/image-vector/red-expert-advice-vector-stamp-260nw-1006714243.jpg",
    },
  ];

  return (
    <Fragment>
      <Home />
      {/* <AIColorPreview /> */}
      <AIColorPreviewStrip />
      <Allcolor />
      <div className='w-full px-4 md:px-8 lg:px-4 py-8 bg-[#f8f8fb]'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-9 flex flex-col gap-6'>
            <div className='p-1 md:p-7'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-[14px]  font-bold text-gray-800 lg:text-[20px]'>
                  Shop By Category
                </h2>
                <Link to="/" className=' text-[14px] text-blue-600 font-semibold lg:text-[16px]'>
                  View All
                </Link>
              </div>
              <Category />
            </div>
            <div className='flex gap-4'>
              <div className='bg-white flex-3 rounded-3xl shadow-sm p-5 md:p-7'>
                <motion.h2 initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }} className='text-2xl font-bold text-gray-800 mb-6'>
                  Top Brands
                </motion.h2>
                <Brands />
              </div>
              <div className='flex-[1.5] bg-white rounded-3xl shadow-sm p-1 md:py-4 md:px-5'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                  Why Choose Us?
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                  {features.map((item) => (
                    <div
                      key={item.id}
                      className='bg-[#f8f8fb] rounded-2xl px-3  gap-2 flex flex-col items-center text-center shadow-2xl hover:shadow-md duration-300 overflow-hidden'>
                      <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm'>
                        <img src={item.image} alt={item.title} className='w-14 h-14 object-contain' />
                      </div>
                      <h4 className='font-bold text-sm'>
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='h-fit lg:col-span-3'>
            <PaintCalculator />
          </div>

        </div>
        <div className='w-full'>
          <Card />
        </div>

      </div>
      <Fotter />
    </Fragment>
  )
}

export default Main