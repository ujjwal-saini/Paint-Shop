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
                <h2 className='text-[18px] lg:text-2xl md:text-3xl  font-bold '>
                  Shop By Category
                </h2>
                <Link to="/" className=' text-[14px] text-violet-600 font-semibold lg:text-[16px]'>
                  View All
                </Link>
              </div>
              <Category />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between flex-3  md:p-5'>
                <h2 className='text-[18px] lg:text-2xl md:text-3xl font-bold  '>
                  Top Brands
                </h2>
                <Link to="/" className=' text-[14px] text-violet-600 font-semibold lg:text-[16px]'>
                  View All
                </Link>
              </div>
              <Brands />
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