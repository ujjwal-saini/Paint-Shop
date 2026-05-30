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
    <div className='
flex 
overflow-x-auto
overflow-y-hidden
gap-4 
pb-2 
scroll-smooth 
custom-scroll
'>

      {categories.map((item, index) => (
        <div
          key={item.id}
          className='
          min-w-[200px]
      lg:min-w-[250px]
      pb-5
      bg-white
      shadow
     rounded-[10px]
      duration-100
      flex
      flex-col
      items-center
      '
        >

          <div className='w-full h-28 lg:h-33 overflow-hidden rounded'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-full object-cover'
            />
          </div>

          <p className='mt-3 text-sm font-semibold text-center text-gray-800'>
            {item.name}
          </p>

        </div>
      ))}

    </div>
  )
}

export default Category