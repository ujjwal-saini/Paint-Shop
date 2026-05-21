import React from "react";
import {
  PaintBucket,
  ShieldCheck,
  Wrench,
  SprayCan,
  ClipboardList,
  Home,
  Package,
} from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";

function Products() {
  const categories = [
    {
      name: "Interior Paints",
      path: "interior",
      icon: <Home size={18} />,
    },
    {
      name: "Exterior Paints",
      path: "exterior",
      icon: <PaintBucket size={18} />,
    },
    {
      name: "Primers",
      path: "primers",
      icon: <ClipboardList size={18} />,
    },
    {
      name: "Wood Finishes",
      path: "wood-finish",
      icon: <Package size={18} />,
    },
    {
      name: "Waterproofing",
      path: "waterproofing",
      icon: <ShieldCheck size={18} />,
    },
    {
      name: "Wall Putty",
      path: "wall-putty",
      icon: <PaintBucket size={18} />,
    },
    {
      name: "Tools & Accessories",
      path: "tools",
      icon: <Wrench size={18} />,
    },
    {
      name: "Spray Paints",
      path: "spray-paints",
      icon: <SprayCan size={18} />,
    },
    {
      name: "Texture Paints",
      path: "texture-paints",
      icon: <PaintBucket size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-5">
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="lg:w-[300px] lg:fixed lg:left-5 lg:top-[120px] bg-white rounded-3xl shadow-md h-fit max-h-[calc(100vh-140px)] overflow-y-auto  overflow-y-hidden p-4">

          <button className="w-full bg-indigo-600 text-white p-4 rounded-2xl font-semibold mb-5">
            All Categories
          </button>

          <div className="space-y-2">
            {categories.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-2xl transition duration-300 ${isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  {item.icon}

                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                </div>

                <span>{">"}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex-1 lg:ml-[330px]">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Products;