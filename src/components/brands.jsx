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
    <div className="w-[250px] py-2 bg-gray-50">
      <div className="flex overflow-x-auto gap-4 pb-2 custom-scroll">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="min-w-[180px] bg-white shadow-xl rounded-2xl flex items-center justify-center p-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;