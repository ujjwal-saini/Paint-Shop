import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import colors from '../../json/colorshade.json'
function Allcolor() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-6 px-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[18px] lg:text-2xl font-bold">
          Trending Colors 2026
        </h3>

        <Link to="Features/AllColorTemplate" className="text-violet-600 text-[15px] lg:text-md font-semibold">
          View All
        </Link>
      </div>

      <div className="relative lg:pl-4 lg:pr-5">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:px-5 custom-scroll"
        >
          {colors.map((item) => (
            <div
              key={item.name}
              className="min-w-[120px] min-h-[120px]   lg:min-w-[220px]   border rounded-2xl overflow-hidden bg-white hover:shadow-lg transition"
            >
              <div
                className="h-18 lg:h-28"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <div className="p-4 h-18 lg:h28">
                <h4 className="font-semibold text-[14px] lg:text-[16px] whitespace-nowrap overflow-hidden ">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {item.color}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Allcolor;