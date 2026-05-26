import React from 'react'
import { motion } from "framer-motion";

function Category() {

  const categories = [
    {
      id: 1,
      name: "Interior",
      image: "https://www.sunshinehomepaintingservice.com/blog/uploads/images/202403/image_870x_65f9c7fd63140.jpg"
    },
    {
      id: 2,
      name: "Exterior",
      image: "https://indigopaints.com/wp-content/uploads/2020/08/1.webp"
    },
    {
      id: 3,
      name: "Wood paint",
      image: "https://st.hzcdn.com/simgs/bb31e4850f2c21a0_14-2709/home-design.jpg"
    },
    {
      id: 4,
      name: "Painting Tools",
      image: "https://images.bergerpaints.com/s3fs-public/2023-11/Banner_5.jpg?VersionId=GQW0m1JMgQoa4xXUZmX8u7WRiVeIOozL&format=webp&width=3840&quality=75"
    },
    {
      id: 5,
      name: "Waterproofing Solutions",
      image: "https://www.20mcc.in/storage/blog/5888866c-b833-425a-b2c3-0df2a77dbd9a1628244450.webp"
    },
    {
      id: 6,
      name: "Wall Putty & Primers",
      image: "https://cms.birlawhite.com/uploads/How_Primer_and_Putty_Work_Together_for_a_Flawless_Wall_Surface_eb10ef38bc.webp"
    },
    {
      id: 7,
      name: "Texture & Designer Finishes",
      image: "https://images.bergerpaints.com/s3fs-public/2023-11/shutterstock_1893888241-1.jpg?VersionId=mSDJvPjnf1EedtueWZejrB6DnTAKuqW7&format=webp&width=3840&quality=75"
    }
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-5'>

      {categories.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.06, y: -8 }}
          className='bg-[#f8f8fb] rounded-2xl p-5 flex flex-col shadow-xl items-center justify-between hover:shadow-xl duration-300 cursor-pointer overflow-hidden'>

          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            className='w-40 h-24 flex items-center justify-center'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-full object-contain' />
          </motion.div>

          <motion.p whileHover={{ scale: 1.05 }} className='mt-3 text-sm font-semibold text-center leading-5'>
            {item.name}
          </motion.p>

        </motion.div>

      ))}

    </div>
  )
}

export default Category