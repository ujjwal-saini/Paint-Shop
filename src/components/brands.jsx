import React from "react";
import { motion } from "framer-motion";

function Brands() {

  const brands = [
    {
      id: 1,
      name: "Asian Paints",
      logo: "https://www.freelogovectors.net/wp-content/uploads/2023/05/asian-paints_logo-freelogovectors.net_.png",
    },
    {
      id: 2,
      name: "Berger Paints",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Berger.png",
    },
    {
      id: 3,
      name: "Nerolac",
      logo: "https://logowik.com/content/uploads/images/kansai-nerolac-paints-limited7357.jpg",
    },
    {
      id: 4,
      name: "Indigo Paints",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Indigo_Paints_Logo.svg/500px-Indigo_Paints_Logo.svg.png",
    },
    {
      id: 5,
      name: "Birla White",
      logo: "https://mir-s3-cdn-cf.behance.net/projects/404/3ede1e221768111.Y3JvcCw4MDgsNjMyLDAsMA.png",
    },
    {
      id: 6,
      name: "Dr. Fixit",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QXqTtuK9P7AyAHm4pFJs2awqvhpdqXoKo1UjX0AWWw&s",
    },
  ];

  return (
    <div className="w-full  py-2 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            viewport={{ once: false }}
            whileHover={{
              scale: 1.08,
              rotate: 2
            }}
            className="bg-white shadow-xl rounded-2xl  flex items-center justify-center cursor-pointer"
          >
            <motion.img
              src={brand.logo}
              alt={brand.name}
              className="h-20 object-contain"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>

        ))}

      </div>
    </div>
  );
}

export default Brands;